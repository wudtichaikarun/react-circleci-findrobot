import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

// ใช้เพื่อ test async
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

it('should create an aciton to search robots', () => {
  const text = 'woo';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };

  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

// async action need dispatch
it('handles requesting robots API', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING
  };

  expect(action[0]).toEqual(expectedAction);
});
