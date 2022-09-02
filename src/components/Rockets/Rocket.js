import React from 'react';
import PropTypes from 'prop-types';
import Button from './RocketsButton';
import './Rockets.css';

function Rocket({
  id, image, name, description, reserved,
}) {
  return (
    <div className="rockets-section">
      <div className="rocket-image">
        <img src={image} alt={name} />
      </div>
      <div className="rocket-information">
        <h2 className="title">{name}</h2>
        <p>
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
