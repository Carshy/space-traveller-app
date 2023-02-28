/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const controls = useAnimation();

  if (inView) {
    controls.start({ value: 10000, duration: 5, onUpdate: (value) => setValue(value) });
  }

  return (
    <section className="mission-section">
      <div className="app__mission-header">
        <p>
          “You want to wake up in the morning and think the future
          is going to be great - and that is what being a spacefaring
          civilization is all about. It is about believing in the future
          and thinking that the future will be better than the past. And
          I can not think of anything more exciting than going out there
          and being among the stars.”
          -Elon Musk
        </p>
      </div>
      <div ref={ref}>
        <motion.h1 animate={controls}>{value.toFixed()}</motion.h1>
      </div>
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
