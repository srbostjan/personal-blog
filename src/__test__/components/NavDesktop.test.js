import React from 'react';
import { shallow } from 'enzyme';
import NavDesktop from '../../components/Header/NavDesktop';

describe('<NavDesktop />', () => {
  test('Render componente NavDesktop', () => {
    const component = shallow(<NavDesktop nav="articles" />);
    expect(component.length).toEqual(1);
  });
});