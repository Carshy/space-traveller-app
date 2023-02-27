import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { LoadMissions } from '../../redux/mission/mission';
import MissionPage from './Mission';
import './mission.scss';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions, shallowEqual);
  useEffect(() => {
    if (missions.length === 0) { dispatch(LoadMissions()); }
  }, []);

  return (
    <section className="mission-section">
      <div className="header-container">
        <p className="mission">Mission</p>
        <p className="description">Description</p>
        <p className="status">Status</p>
        <p className="join">Join</p>
      </div>
      <ul className="mission-container>">
        { missions.map((mission) => (
          <MissionPage
            key={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            id={mission.mission_id}
            status={mission.reserved}
          />
        ))}
      </ul>
    </section>
  );
};

export default Missions;
