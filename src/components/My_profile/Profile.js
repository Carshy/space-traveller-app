import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './profile.css';
import { PopulateMissionProfile } from '../../redux/mission/mission';
import { PopulateRocketsProfile } from '../../redux/rockets/rocket';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(PopulateMissionProfile());
    dispatch(PopulateRocketsProfile());
  }, []);

  return (
    <div className="myProfile">
      <section className="my-comp">
        <h2>My Mission</h2>
        <ul className="reserved-container">
          { missions.map((mission) => (mission.reserved === true ? (
            <li className="reserved-item" key={mission.mission_id}>
              {' '}
              {mission.mission_name}
              {' '}
            </li>
          ) : null))}
        </ul>
      </section>

      <section className="my-comp">
        <h2>My Rockets</h2>
        <ul className="reserved-container">
          { rockets.map((rocket) => (rocket.reserved === true ? (
            <li className="reserved-item" key={rocket.id}>
              {' '}
              {rocket.rocket_name}
              {' '}
            </li>
          ) : null))}
        </ul>
      </section>
    </div>
  );
};

export default Profile;
