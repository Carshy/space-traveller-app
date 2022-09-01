import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import Button from './RocketsButton';
import './Rockets.css';

const Rockets = (props) => {
  const { rocket } = props;
  const {
    id, name, description, image,
  } = rocket;

  // const dispatch = useDispatch();

  return (
    <div id={id} className="rockets-section">
      <div className="rocket-image">
        <img src={image} alt={name} />
      </div>
      <div className="rocket-information">
        <h2 className="title">{name}</h2>
        <p>
          {description}
        </p>
        <button id={id} type="button" className="rocket-button">Reserve Rocket</button>
      </div>
    </div>
  );
};

Rockets.propTypes = {
  rocket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rockets;
