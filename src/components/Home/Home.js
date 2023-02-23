/* eslint-disable arrow-body-style */
import React from 'react';
import { motion } from 'framer-motion';
import { RxDoubleArrowDown } from 'react-icons/rx';
import './Home.scss';

const Home = () => {
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
              INMASSRT 1-4 F3
              <br />
              MISSION
            </h2>
            <a href="https://www.youtube.com/watch?v=OnoNITE-CLc" target="_blank" rel="noreferrer"><h6>Mission launch</h6></a>
          </motion.div>
          <h3 className="app__key"><RxDoubleArrowDown /></h3>
        </div>
      </div>

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
            <a href="https://www.youtube.com/watch?v=OnoNITE-CLc" target="_blank" rel="noreferrer"><h6>LEARN MORE</h6></a>
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
            <a href="https://www.youtube.com/watch?v=OnoNITE-CLc" target="_blank" rel="noreferrer"><h6>LEARN MORE</h6></a>
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