import { Link } from 'react-router-dom';
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-gradient-to-t from-[#96151c] to-[#e21e25] text-white">
        <aside className='text-xl'>
          <img src='https://i.ibb.co/9rqnFC6/Screenshot-108-Copy.png' alt="" className='w-48' />
          <p className="font-bold">
            Nishi Pet Adoption Co. Ltd. <br />Providing Pet Adoption Service since 1991
          </p>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 text-3xl">
            <Link to='https://www.twitter.com' target="_blank" ><a><FaTwitter /></a></Link>

            <Link to='https://www.youtube.com' target="_blank" >
              <a><FaYoutube /></a>
            </Link>

            <Link to='https://www.facebook.com' target="_blank" >
              <a><FaFacebook /></a>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;