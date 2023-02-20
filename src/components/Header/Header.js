import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import planetLogo from './planetLogo.png';

function Navigation() {
  return (
    <div>
      <nav className="navigation-section">
        <a className="nav-link" href="/">
          <img className="rocket-logo" src={planetLogo} alt="planet logo" />
          <span className="text-logo">Space Hub Shuttle</span>
        </a>
        <ul className="nav-group">
          <li>
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/rockets" className="nav-item">
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
