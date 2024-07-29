import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
        <Link to={'/'}>
      <div className='skct-banner'>
        <img src='src/assets/skct-banner.jpg' alt='not found' />
      </div>
      </Link>
      <div className='header__menu-items'>
        <div className='navbar__signin-text'>
          <Link to={'/signin'}>Sign In</Link>
        </div>
        <div className='navbar__signin-text'>
            <Link to={'/signup'} >Create an account</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
