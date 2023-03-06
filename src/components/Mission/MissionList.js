/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { useState, useEffect } from 'react';
// import { RxDoubleArrowDown } from 'react-icons/rx';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { LoadMissions } from '../../redux/mission/mission';
import MissionPage from './Mission';
import './mission.scss';
import '../Home/Home.scss';

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

      <div className="app__footer">
        <div className="app__footer-upper">
          <div className="app__footer-destinations">
            <div className="moon">
              <p>Moon</p>
            </div>
            <div className="mars">
              <p>Mars</p>
            </div>
          </div>
          <div className="app__footer-aboutterms">
            <h5>About Us</h5>
            <h5>FAQ</h5>
            <h5>Privacy & Terms</h5>
          </div>
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div
              className="app__counterup-home"
            >
              <div>
                <h1>
                  {counterOn && <CountUp start={0} end={321} duration={2} delay={0} />}
                  +
                </h1>
                <p>LAUNCHES</p>
              </div>

              <div>
                <h1>
                  {counterOn && <CountUp start={0} end={205} duration={2} delay={0} />}
                  +
                </h1>
                <p>LANDINGS</p>
              </div>

              <div>
                <h1>
                  {counterOn && <CountUp start={0} end={187} duration={2} delay={0} />}
                  +
                </h1>
                <p>REFLIGHTS</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        <hr />
        <div className="app__footer-lower">
          <p className="footer-lower-header">
            S.Connect
          </p>
          <div>
            <a href="https://www.facebook.com/collins.mussoko" className="footer-socials">
              <FaFacebookF />
            </a>
            <a href="https://www.facebook.com/collins.mussoko" className="footer-socials">
              <AiOutlineGooglePlus />
            </a>
            <a href="https://twitter.com/CarshyCollins" className="footer-socials">
              <FaTwitter />
            </a>
          </div>
          <p className="footer__copyright">App Created by ©Collins Musoko</p>
        </div>
      </div>
    </section>
  );
};

export default Missions;
