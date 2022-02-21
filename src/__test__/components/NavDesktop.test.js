import React from 'react';
import { mount, shallow } from 'enzyme';
import NavDesktop from '../../components/Header/NavDesktop';

describe('<NavDesktop />', () => {
  test('Render componente NavDesktop', () => {
    const card = shallow(<NavDesktop nav="articles" />);
    expect(card.length).toEqual(1);
  });
});