import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rockets from './Rockets';
import { getRocketInfoFromApi } from '../../redux/rockets/rocket';

function RocketList() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketInfoFromApi());
  }, [dispatch]);

  return (
    <div>
      {
        rockets.map((rocket) => (
          <Rockets
            key={rocket.id}
            id={rocket.id}
            rocket={rocket}
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

export default RocketList;
