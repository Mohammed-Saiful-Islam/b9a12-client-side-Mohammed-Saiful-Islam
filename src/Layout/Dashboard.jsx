import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useEffect, useState } from "react";

const Dashboard = () => {

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

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex ">
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-gradient-to-t from-[#96151c] to-[#e21e25]">
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
        {isAdmin ?
          <><ul className="menu p-4 ">
            <li className="text-white">
              <NavLink to='/dashboard/adminHome'>
                <FaHome /> Admin Home</NavLink>
            </li>
          </ul>
            <ul className="menu p-4">
              <li className="text-white">
                <NavLink to='/dashboard/users'>
                  <FaUsers />All Users</NavLink>
              </li>
            </ul>
          </>
          :
          <><ul className="menu p-4 ">
            <li className="text-white">
              <NavLink to='/dashboard/userHome'>
                <FaHome /> User Home</NavLink>
            </li>
          </ul>
          </>}

        {/* shared nav links */}

        <ul className="menu p-4 text-white">
          <div className="divider"></div>
          <li>
            <NavLink to='/'>
              <FaHome /> <span className="font-bold">Home</span></NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;