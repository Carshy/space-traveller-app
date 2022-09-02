import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { LoadMissions } from '../../redux/mission/mission';
import MissionPage from './Mission';
import './mission.css';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadMissions());
  }, []);

  return (
    <section className="mission-section">
      <div className="header-container">
        <p className="mission">Mission</p>
        <p className="description">Description</p>
        <p className="status">Status</p>
        <p className="join">Join</p>
      </div>
      <div className="mission-container">
        { missions.map((mission) => (
          <MissionPage
            key={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            id={mission.mission_id}
          />
        ))}
      </div>
    </section>
  );
};

export default Missions;
