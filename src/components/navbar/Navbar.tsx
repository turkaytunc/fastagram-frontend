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

const TopNavbar = () => {
  return (
    <nav className="navbar-container border-b border-gray-300 py-2 px-3 sm:px-10 md:px-20">
      <section className="navbar-logo w-96">
        <Link to="/">
          <img src={logo} alt="instagram" className="w-28" />
        </Link>
      </section>
      <ul className="navbar-links w-96 md:ml-48">
        <li>
          <Link to="/">
            <FaHome size="22" fill="#252525" />
          </Link>
        </li>
        <li>
          <FaRegPlusSquare size="22" fill="#252525" />
        </li>
        <li>
          <FaRegPaperPlane size="22" fill="#252525" />
        </li>
        <li>
          <FaRegCompass size="22" fill="#252525" />
        </li>
        <li>
          <FaRegHeart size="22" fill="#252525" />
        </li>
        <li>
          <FaCog size="22" fill="#252525" />
        </li>
      </ul>
    </nav>
  );
};

export default TopNavbar;
