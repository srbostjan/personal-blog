import React from 'react';
import { shallow } from 'enzyme';
import HomeCard from '../../components/Home/HomeCard';

describe('<HomeCard />', () => {
  test('Render componente Homecard', () => {
    const component = shallow(<HomeCard to='/articles' name='articles'/>);
    expect(component.length).toEqual(1);
  });
});