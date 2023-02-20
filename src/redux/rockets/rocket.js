const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';
const POPULATE_ROCKETS_PROFILE = 'POPULATE_ROCKETS_PROFILE';

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

export const PopulateRocketsProfile = (id) => ({
  type: POPULATE_ROCKETS_PROFILE,
  payload: id,
});

// Rocket Reducer to modify state action
const rocketReducer = (state = rocketArray, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;

    case RESERVE_ROCKET:
    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    case POPULATE_ROCKETS_PROFILE:
      return [...state];
    default:
      return state;
  }
};

export default rocketReducer;
