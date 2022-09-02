import React from 'react';
import Proptypes from 'proptypes';
import { useDispatch } from 'react-redux';
import { JoinMissions, LeaveMission } from '../../redux/mission/mission';
import './mission.css';

const MissionPage = ({
  name, description, id, status,
}) => {
  const dispatch = useDispatch();

  const missionParticipation = () => (status === false ? dispatch(JoinMissions(id))
    : dispatch(LeaveMission(id)));

  return (
    <>
      { status === false ? (
        <div className="mission-table" id={id}>
          <h2>{name}</h2>
          <p className="mission-description">
            {description}
          </p>
          <div className="border">
            <p className="mission-status">
              Not a member
            </p>
          </div>
          <button type="button" id={id} onClick={missionParticipation} className="mission-button"> Join mission</button>
        </div>
      ) : (
        <div id={id} className="mission-table">
          <h2>{name}</h2>
          <p className="mission-description">
            {description}
          </p>
          <p className="mission-status member">
            Active member
          </p>
          <button type="button" id={id} onClick={missionParticipation} className="mission-button leave"> Leave mission</button>
        </div>
      )}
    </>
  );
};

MissionPage.propTypes = {
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  status: Proptypes.bool.isRequired,
};

export default MissionPage;
