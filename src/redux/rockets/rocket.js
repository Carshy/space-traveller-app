/* eslint-disable no-case-declarations */
// defining action types to fetch rocket data
const FETCH_ROCKETS = 'space-traveller-app/rockets/FETCH_ROCKETS';
const RESERVE_ROCKET = 'space-traveller-app/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'space-traveller-app/rockets/CANCEL_RESERVATION';

// api base URL
const apiBaseUrl = 'https://api.spacexdata.com/v3/rockets';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchRockets = () => getData(apiBaseUrl);

// Setting the Initial State
const rocketArray = [];

// Exporting Action creators
export const getRocketInfoFromApi = () => async (dispatch) => {
  try {
    const data = await fetchRockets();

    dispatch({ type: FETCH_ROCKETS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

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
      const filteredData = action.payload.map((rocket) => {
        const {
          id, rocket_name: name, rocket_type: type, flickr_images: image, description,
        } = rocket;
        return {
          id, name, type, image, description,
        };
      });
      return [...state, ...filteredData];

    case RESERVE_ROCKET:
    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
};

export default rocketReducer;
