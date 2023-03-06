import React, { useState, useEffect } from 'react';
// import { RxDoubleArrowDown } from 'react-icons/rx';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { getRocketInfoFromApi } from '../../redux/rockets/rocket';
import '../Home/Home.scss';

function Rockets() {
  const [counterOn, setCounterOn] = useState(false);
  // get rockets data from the store
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocketInfoFromApi());
    }
  }, []);

  return (
    <div className="app__rocket">
      {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.rocket_name}
            image={rocket.flickr_images[0]}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))
      }

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
}

export default Rockets;
