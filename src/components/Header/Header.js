import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import companyLogo from './companyLogo.PNG';

function Navigation() {
  return (
    <div>
      <nav className="navigation-section">
        <a className="nav-link" href="/">
          <img src={companyLogo} alt="travellers" />
        </a>
        <ul className="nav-group">
          <li>
            <NavLink to="/" className="nav-item active">
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/missions" className="nav-item">
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/profiles" className="nav-item">
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
