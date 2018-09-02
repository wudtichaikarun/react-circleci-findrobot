import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initalStateSearch = {
    searchField: ''
  };

  it('should return the intial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchRobots(initalStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'abc'
      })
    ).toEqual({
      searchField: 'abc'
    });
  });
});

describe('requestRobots', () => {
  const initalStateRobots = {
    robots: [],
    isPending: false,
    error: ''
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initalStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobots(initalStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      robots: [],
      isPending: true,
      error: ''
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobots(initalStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '123',
            name: 'romantic',
            email: 'Ro@hotmail.com'
          }
        ]
      })
    ).toEqual({
      robots: [
        {
          id: '123',
          name: 'romantic',
          email: 'Ro@hotmail.com'
        }
      ],
      isPending: false,
      error: ''
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.requestRobots(initalStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'NOOOO!!'
      })
    ).toEqual({
      robots: [],
      error: 'NOOOO!!',
      isPending: false
    });
  });
});
