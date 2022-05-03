// import { a } from 'react-router-dom';

import { Link } from 'react-router-dom';
import ImageStorage from '../Store/ImageStorage';

const NavBar = () => {
  return (
    <header id='navbar' className='navbar'>
      <div className='navbar-container'>
        <Link to='/'>
          <img
            src={ImageStorage.approiLogo}
            loading='lazy'
            alt=''
            className='logo-image'
          />
        </Link>
        <div className='menu-button w-nav-button'>
          <div className='icon w-icon-nav-menu'></div>
        </div>
        <nav role='navigation' className='navbar-menu'>
          <Link to='/about' className='navbar-link'>
            ABOUT
          </Link>
          <Link to='/services' className='navbar-link'>
            SERVICES
          </Link>
          <Link to='/case-study' className='navbar-link'>
            CASE STUDY
          </Link>
          <Link to='/news' className='navbar-link'>
            NEWS
          </Link>
          <Link to='/contact' className='navbar-link'>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
