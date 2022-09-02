import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { getRocketInfoFromApi } from '../../redux/rockets/rocket';

function Rockets() {
  // get rockets data from the store
  const rockets = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRocketInfoFromApi());
  // }, []);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocketInfoFromApi());
    }
  }, []);

  return (
    <div>
      {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            image={rocket.image[0]}
            name={rocket.name}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))
      }
    </div>
  );
}

export default Rockets;
