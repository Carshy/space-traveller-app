import React from 'react';
import falcon from './img/falcon.jpg';
import './Rockets.css';

const Rockets = () => (
  <div>
    <div className="rockets-section">
      <div className="rocket-image">
        <img src={falcon} alt="rocket" />
      </div>
      <div className="rocket-information">
        <h2 className="title">Falcon 1</h2>
        <p>
          Falcon 1 was a small-lift launch vehicle that
          {' '}
          <br />
          was operated from 2006 to 2009 by SpaceX, an American
          <br />
          aerospace manufacturer. On 28 September 2008, Falcon 1
          <br />
          became the first privately-developed fully liquid-fueled
          <br />
          launch vehicle to go into orbit around the Earth.
        </p>
        <button type="button" className="rocket-button">Reserve Rocket</button>
      </div>
    </div>
  </div>
);

export default Rockets;
