import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card component', () => {
  // Card component return 1 component
  expect(
    shallow(<Card />)
  ).toMatchSnapshot();
});
