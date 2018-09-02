import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';
import { apiCall } from './spi/api';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// REDUX ASYNC ACTION
export const requestRobots = () => dispatch => {
  dispatch({
    type: REQUEST_ROBOTS_PENDING
  });

  // fetch(
  //   'https://jsonplaceholder.typicode.com/users'
  // )
  //   .then(res => res.json())
  //   .then(data =>
  //     dispatch({
  //       type: REQUEST_ROBOTS_SUCCESS,
  //       payload: data
  //     })
  //   )

  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }));
};
