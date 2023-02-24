import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { getRocketInfoFromApi } from '../../redux/rockets/rocket';

function Rockets() {
  // get rockets data from the store
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocketInfoFromApi());
    }
  }, []);

  return (
    <div className="app__rocket">
      {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.rocket_name}
            image={rocket.flickr_images[0]}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))
      }
    </div>
  );
}

export default Rockets;
