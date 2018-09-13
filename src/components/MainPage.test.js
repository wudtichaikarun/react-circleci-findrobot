import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it('render MainPage without crashing', () => {
  // expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 4,
        name: 'Romanic',
        email: 'Ro@gmail.com'
      }
    ],
    searchField: 'Ro',
    isPending: false
  };

  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  // instance() ทำให้สามารถเข้าถึงทุก method ที่ื MainPage มี
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 4,
      name: 'Romanic',
      email: 'Ro@gmail.com'
    }
  ]);
});

it('filters robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 4,
        name: 'Romanic',
        email: 'Ro@gmail.com'
      }
    ],
    searchField: 'f',
    isPending: false
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(
    filteredRobots
  );
});
