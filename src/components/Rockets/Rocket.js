import React from 'react';
import PropTypes from 'prop-types';
import Button from './RocketsButton';
import './Rockets.css';

function Rocket({
  id, image, name, description, reserved,
}) {
  return (
    <div>
      <div className="rockets-section">
        <div className="rocket-image">
          <img src={image} alt={name} />
        </div>
        <div className="rocket-information">
          <h1 className="title">{name}</h1>
          <p className="rocket-description">
            {
            reserved
              ? <span className="badge">Reserved</span>
              : ''
          }
            {description}
          </p>
          <Button id={id} reserved={reserved} />
        </div>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default Rocket;
