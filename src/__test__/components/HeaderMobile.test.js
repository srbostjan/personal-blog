import React from 'react';
import { shallow } from 'enzyme';
import HeaderMobile from '../../components/Header/HeaderMobile';

describe('<HeaderMobile />', () => {
  test('Render componente HeaderMobile', () => {
    const component = shallow(<HeaderMobile name="All articles" nav="articles" />);
    expect(component.length).toEqual(1);
  });
});