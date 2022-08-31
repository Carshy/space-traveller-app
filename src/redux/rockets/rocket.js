// defining action types to fetch rocket data
const GET_DATA = 'space-traveller-app/rockets/GET_DATA';

// api base URL
const apiBaseUrl = 'https://api.spacexdata.com/v3/rockets';

// Setting the Initial State
const rocketArray = [];

// Exporting Action creators
export const getRocketFromApi = () => (dispatch) => fetch(apiBaseUrl)
  .then((res) => res.json())
  .then((data) => {
    const rockets = Object.keys(data).map((key) => {
      const rocket = data[key][0];
      return {
        id: key,
        ...rocket,
      };
    });
    dispatch({
      type: GET_DATA,
      payload: rockets,
    });
  })
  .catch(() => {});

// Rocket Reducer to modify state action
const rocketReducer = (state = rocketArray, action) => {
  switch (action.type) {
    case GET_DATA:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default rocketReducer;
