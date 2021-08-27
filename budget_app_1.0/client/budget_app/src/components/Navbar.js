import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="App-nav">
      <NavLink exact activeClassName="active-link" to="/">
        {' '}
        My Profile{' '}
      </NavLink>
      <NavLink exact activeClassName="active-link" to="/history">
        History{' '}
      </NavLink>
      <NavLink exact activeClassName="active-link" to="/report">
        {' '}
        Report
      </NavLink>
    </div>
  );
};

export default Navbar;
