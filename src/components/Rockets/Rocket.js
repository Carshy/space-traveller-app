import React from 'react';
import PropTypes from 'prop-types';
import Button from './RocketsButton';
import './Rockets.scss';

function Rocket({
  id, image, name, description, reserved,
}) {
  return (
    <div>
      <div className="app__rockets-details">
        <div className="app__rockets-title">
          <h1>{name}</h1>
        </div>
        <div className="app__rocket-info">
          <div className="rocket-information">
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
          <div className="rocket-image">
            <img src={image} alt={name} />
          </div>
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
