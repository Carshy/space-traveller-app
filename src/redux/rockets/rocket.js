/* eslint-disable no-case-declarations */
// defining action types to fetch rocket data
const FETCH_ROCKETS = 'spaceTraveller/api/FETCH_ROCKETS';
const RESERVE_ROCKET = 'spaceTraveller/api/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'spaceTraveller/api/CANCEL_RESERVATION';
const ADD_ROCKET_NAME = 'spaceTraveller/api/ADD_ROCKET_NAME';

// api base URL
const apiBaseUrl = 'https://api.spacexdata.com/v3/rockets';

// Setting the Initial State
const rocketArray = [];

// Exporting Action creators
export const getRocketInfoFromApi = () => (dispatch) => fetch(apiBaseUrl)
  .then((res) => res.json())
  .then((data) => {
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
      reserved: false,
    }));
    dispatch({ type: FETCH_ROCKETS, payLoad: rockets });
  }).catch(() => {});

export const reserveRocket = (payload) => (
  {
    type: RESERVE_ROCKET,
    payload,
  }
);

export const cancelReservation = (payload) => (
  {
    type: CANCEL_RESERVATION,
    payload,
  }
);

// Rocket Reducer to modify state action
const rocketReducer = (state = rocketArray, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [
        ...action.payLoad,
      ];

    case ADD_ROCKET_NAME:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default rocketReducer;
