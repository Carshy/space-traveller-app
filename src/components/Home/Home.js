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
    </div>
  );
};

export default Home;
