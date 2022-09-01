import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Rockets from './Rockets';
import { getRocketInfoFromApi } from '../../redux/rockets/rocket';

function RocketList() {
  // const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (document.querySelector('.roch').children.length === 0) dispatch(getRocketInfoFromApi());
  }, []);

  return (
    <div>
      <Rockets />
    </div>
  );
}

export default RocketList;
