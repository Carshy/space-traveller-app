import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './profile.css';
import { PopulateMissionProfile } from '../../redux/mission/mission';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer);

  useEffect(() => {
    dispatch(PopulateMissionProfile());
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
    </div>
  );
};

export default Profile;
