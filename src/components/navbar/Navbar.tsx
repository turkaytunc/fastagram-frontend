import './navbar.scss';
import { Link } from 'react-router-dom';
import logo from 'src/images/instagram-login.png';
import {
  FaRegPlusSquare,
  FaRegPaperPlane,
  FaRegCompass,
  FaRegHeart,
  FaCog,
  FaHome,
} from 'react-icons/fa';
import { useState } from 'react';
import CogMenu from '../cog-menu/CogMenu';

const Navbar = () => {
  const [showCogMenu, setShowCogMenu] = useState(false);
  return (
    <nav className="navbar-container border-b border-gray-300 py-2 px-3 sm:px-10 md:px-20">
      <section className="navbar-logo w-96">
        <Link to="/">
          <img src={logo} alt="instagram" className="w-28" />
        </Link>
      </section>
      <ul className="navbar-links w-96 md:ml-48 relative">
        <li className="menu-item">
          <Link to="/">
            <FaHome size="22" fill="#252525" />
          </Link>
        </li>
        <li className="menu-item">
          <FaRegPlusSquare size="22" fill="#252525" />
        </li>
        <li className="menu-item">
          <FaRegPaperPlane size="22" fill="#252525" />
        </li>
        <li className="menu-item">
          <FaRegCompass size="22" fill="#252525" />
        </li>
        <li className="menu-item">
          <FaRegHeart size="22" fill="#252525" />
        </li>
        <button className="menu-item" type="button" onClick={() => setShowCogMenu((prev) => !prev)}>
          <FaCog size="22" fill="#252525" />
        </button>
        {showCogMenu && <CogMenu />}
      </ul>
    </nav>
  );
};

export default Navbar;
