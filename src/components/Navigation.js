import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import companyLogo from '../images/companyLogo.PNG';

function Navigation() {
  return (
    <div>
      <nav className="navigation-section">
        <a className="nav-link" href="/">
          <img src={companyLogo} alt="travellers" />
        </a>
        <ul className="nav-group">
          <li>
            <Link to="/" className="nav-item">
              Rockets
            </Link>
          </li>
          <li>
            <Link to="/missions" className="nav-item">
              Missions
            </Link>
          </li>
          <li>
            <Link to="/profiles" className="nav-item">
              My Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
