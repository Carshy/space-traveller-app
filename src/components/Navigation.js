import React from 'react';

function Navigation() {
  return (
    <div>
      <nav className="navigation-section">
        <a href="/">
          <img src="/" alt="space travellers" />
          Space Travellers Hub
        </a>
        <ul className="nav-group">
          <li className="nav-item">Rockets</li>
          <li className="nav-item">Missions</li>
          <li className="nav-item">My Profile</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
