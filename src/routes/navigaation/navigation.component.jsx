import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => (
  <Fragment>
    <nav className='navigation'>
      <Link className='logo-container' to='/'>
        <CrwnLogo className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          Shop
        </Link>
        <Link className='nav-link' to='/signin'>
          Sign In
        </Link>
      </div>
    </nav>
    <Outlet />
  </Fragment>
);

export default Navigation;