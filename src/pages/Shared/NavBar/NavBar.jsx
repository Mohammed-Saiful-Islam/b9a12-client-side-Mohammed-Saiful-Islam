import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  
   const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);


  const{user,logOut}=useContext(AuthContext);
  console.log(user)
  const[isAdmin]=useAdmin();

  const handleLogOut=()=>{
logOut()
.then(()=>{})
.catch(error=>console.log(error));
  }
    const navOptions=<>
    <li className="text-xl"><Link to='/'>Home</Link></li>
    <li className="text-xl"><Link to='/petList'>Pet List</Link></li>
    <li className="text-xl"><Link to='/donationCampaigns'>Donation 
    Campaigns</Link></li>
    {
      user?<>
      
      </>:<>
      <li className=" text-xl"><Link to='/login'>Login</Link></li>
      </>
    }
    </>
    return (
        <>
        <div className="navbar fixed z-10 bg-opacity-30 bg-gradient-to-t from-[#96151c] to-[#e21e25] max-w-screen-xl text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-pink-950 bg-opacity-30 bg-gradient-to-t from-[#96151c] to-[#e21e25] rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <div className="w-28">
        <img className="w-full" src="https://i.ibb.co/9rqnFC6/Screenshot-108-Copy.png" alt="" />
      </div>
    </a>
    <label className='cursor-pointer grid place-items-center'>
          <input
            type='checkbox'
            onChange={handleToggle}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
            checked={theme === 'dark'} // Update input checked state based on theme
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn bg-gradient-to-t from-[#96151c] to-[#e21e25] text-white hover:text-yellow-300 text-2xl border-none">Donation</a> */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-36 rounded-full">
          <img alt="Profile Pic" src={user?.photoURL} />
        </div>
      </div>
      {
      user?<>
     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 bg-gradient-to-t from-[#96151c] to-[#e21e25] rounded-box w-52">
        
        {
      user&&isAdmin&&<li className=" text-xl"><Link to='/dashboard/adminHome'>Dashboard</Link></li>
    }
    {
      user&&!isAdmin&&<li className=" text-xl"><Link to='/dashboard/userHome'>Dashboard</Link></li>
    }
    {
      user?<>
      <li><button onClick={handleLogOut} className="btn btn-ghost text-xl">LogOut</button></li>
      </>:<>
      
      </>
    }
        
      </ul>
      </>:<>
      
      </>
    }
      
    </div>
  </div>
</div>            
        </>
    );
};

export default NavBar;