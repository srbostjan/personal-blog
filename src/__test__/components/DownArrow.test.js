/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import DownArrow from '../../components/DownArrow';

describe('<DownArrow />', () => {
  test('Render componente DownArrow', () => {
    const card = mount(<DownArrow />);
    expect(card.length).toEqual(1);
  });
});
