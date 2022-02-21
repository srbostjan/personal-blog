import React from 'react';
import { mount, shallow } from 'enzyme';
import HomeCard from '../../components/Home/HomeCard';

describe('<HomeCard />', () => {
  test('Render componente Homecard', () => {
    const card = shallow(<HomeCard to='/articles' name='articles'/>);
    expect(card.length).toEqual(1);
  });
});