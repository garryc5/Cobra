import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  let nav = props.user ?
    <div className='nav-container'>
      <Link to='' type='button' className='nav-link' onClick={props.handleLogout}>LOG OUT</Link>
      |
        <span className='nav-link'>WELCOME, {props.user.name}</span>
    </div >
    :
    <div className='nav-container'>
      <Link to='/login' className='nav-link' >LOG IN</Link>|<Link to='/signup' className='nav-link'>SIGN UP</Link>
    </div>;

  return (
    <div>
      {nav}
    </div>
  );
};


export default NavBar