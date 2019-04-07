import axios from 'axios';

const HIKING_PROJECT_API_KEY = process.env.REACT_APP_HIKING_PROJECT_API_KEY;

//Fetch hikes by coordinates

export function fetchHikes(latitude, longitude, maxDistance, maxResults) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_HIKES' });
    return axios.get(`https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=${maxDistance}&maxResults=${maxResults}&key=${HIKING_PROJECT_API_KEY}`)
      .then(hikes => dispatch({ type: 'FETCH_HIKES', hikes }));
  };
}

//Fetch a hike by ID

export function fetchHike(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_HIKE' });
    return axios.get(`https://www.hikingproject.com/data/get-trails-by-id?ids=${id}&key&key=${HIKING_PROJECT_API_KEY}`)
      .then(hike => dispatch({ type: 'FETCH_HIKE', hike }));
  };
}
