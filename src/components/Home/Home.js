import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { RxDoubleArrowDown } from 'react-icons/rx';
import './Home.scss';

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <div className="app__home-bg1">
        <div className="app__home-cover">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.9 }}
          >
            <p>Recent launch</p>
            <h2>
              MAKING HUMANITY
              <br />
              MULTIPLANETARY
            </h2>
            <p className="home-desc">
              Building on the achievements of Falcon 9 and Falcon Heavy,
              <br />
              We are working on next generation of fully reusable launch
              <br />
              vehicles capable of carrying humans to Mars and
              other destinations in the solar system.
              <br />
            </p>
            <a href="https://www.youtube.com/watch?v=OnoNITE-CLc" target="_blank" rel="noreferrer"><p className="home-link">Mission launch</p></a>
          </motion.div>
          <h3 className="app__key"><RxDoubleArrowDown /></h3>
        </div>
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
            <p>TOTAL LAUNCHES</p>
          </div>

          <div>
            <h1>
              {counterOn && <CountUp start={0} end={205} duration={2} delay={0} />}
              +
            </h1>
            <p>TOTAL LANDINGS</p>
          </div>

          <div>
            <h1>
              {counterOn && <CountUp start={0} end={187} duration={2} delay={0} />}
              +
            </h1>
            <p>TOTAL REFLIGHTS</p>
          </div>
        </div>
      </ScrollTrigger>

      <div className="app__home-bg2">
        <div className="app__home-cover1">
          <motion.div
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <h2>
              STARSHIP SHUTTLE SELECTED
              <br />
              BY NASA TO SUPPORT
              <br />
              SUSTAINED LUNAR
              <br />
              EXPLORATION
            </h2>
            <a href="https://www.youtube.com/watch?v=OnoNITE-CLc" target="_blank" rel="noreferrer"><p className="home-link">LEARN MORE</p></a>
          </motion.div>
          <h3 className="app__key"><RxDoubleArrowDown /></h3>
        </div>
      </div>

      <div className="app__home-bg3">
        <div className="app__home-cover2">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.9 }}
          >
            <h2>
              MISSION TO BUILD
              <br />
              A GIANT MOON ROCKET
              <br />
              FOR EXPLORATION
            </h2>
            <a href="https://www.youtube.com/watch?v=OnoNITE-CLc" target="_blank" rel="noreferrer"><p className="home-link">LEARN MORE</p></a>
          </motion.div>
          <h3 className="app__key"><RxDoubleArrowDown /></h3>
        </div>
      </div>

      <div className="app__footer">
        <p>Space Hub Shuttle Copyright ©2023</p>
        <a href="https://www.linkedin.com/in/collins-musoko/" target="_blank" rel="noreferrer"><h5>LinkedIn</h5></a>
        <a href="https://github.com/Carshy" target="_blank" rel="noreferrer"><h5>Github</h5></a>
        <p>App Created by ©Collins Musoko</p>
      </div>
    </div>
  );
};

export default Home;
