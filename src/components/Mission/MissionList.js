/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { LoadMissions } from '../../redux/mission/mission';
import MissionPage from './Mission';
import './mission.scss';

const Missions = () => {
  const [counterOn, setCounterOn] = useState(false);
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions, shallowEqual);

  useEffect(() => {
    if (missions.length === 0) { dispatch(LoadMissions()); }
  }, []);

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
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div
          className="app__counterup"
        >
          <div>
            <h1>
              {counterOn && <CountUp start={0} end={276} duration={2} delay={0} />}
              +
            </h1>
            <p>TOTAL LAUNCHES</p>
          </div>

          <div>
            <h1>
              {counterOn && <CountUp start={0} end={195} duration={2} delay={0} />}
              +
            </h1>
            <p>TOTAL LANDINGS</p>
          </div>

          <div>
            <h1>
              {counterOn && <CountUp start={0} end={167} duration={2} delay={0} />}
              +
            </h1>
            <p>TOTAL REFLIGHTS</p>
          </div>
        </div>
      </ScrollTrigger>

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
