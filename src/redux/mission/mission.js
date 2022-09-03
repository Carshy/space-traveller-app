import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const LOAD_MISSIONS = 'spacetravellers/missions/missions';
const JOIN_MISSIONS = 'spacetravellers/missions/joinMissions';
const LEAVE_MISSIONS = 'spacetravellers/missions/leaveMissions';
const POPULATE_MISSIONS_PROFILE = 'spacetravellers/mission/populateMissionsProfile';

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'spacetravellers/missions/missions/fulfilled':
      return [...action.payload];
    case JOIN_MISSIONS:
      return [
        ...state.map((mission) => (mission.mission_id !== action.payload
          ? mission : { ...mission, reserved: true }))];
    case LEAVE_MISSIONS:
      return [
        ...state.map((mission) => (mission.mission_id !== action.payload
          ? mission : { ...mission, reserved: false })),
      ];
    case POPULATE_MISSIONS_PROFILE:
      return [...state];
    default:
      return state;
  }
};

const LoadMissions = createAsyncThunk(
  LOAD_MISSIONS,
  async () => {
    const res = await axios.get('https://api.spacexdata.com/v3/missions').then((res) => res.data);
    const work = res.map((mission) => ({ ...mission, reserved: false }));
    return work;
  },
);

const JoinMissions = (id) => ({
  type: JOIN_MISSIONS,
  payload: id,
});

const LeaveMission = (id) => ({
  type: LEAVE_MISSIONS,
  payload: id,
});

const PopulateMissionProfile = (id) => ({
  type: POPULATE_MISSIONS_PROFILE,
  payload: id,
});

export {
  LoadMissions, JoinMissions, LeaveMission, PopulateMissionProfile,
};
export default missionReducer;
