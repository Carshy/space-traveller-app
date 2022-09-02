import React from 'react';
import Proptypes from 'proptypes';

const MissionPage = ({ name, description, id }) => (
  <div className="mission-table">
    <h2>{name}</h2>
    <p className="mission-description">
      {description}
    </p>
    <p className="mission-status member">
      Active member
    </p>
    <button type="button" id={id} className="mission-button join"> Join mission</button>
  </div>
);

MissionPage.propTypes = {
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
};

export default MissionPage;
