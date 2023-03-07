import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { RxDoubleArrowDown } from 'react-icons/rx';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
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
    </div>
  );
};

export default Home;
