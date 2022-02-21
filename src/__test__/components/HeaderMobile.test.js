import React from 'react';
import { mount, shallow } from 'enzyme';
import HeaderMobile from '../../components/Header/HeaderMobile';

describe('<HeaderMobile />', () => {
  test('Render componente HeaderMobile', () => {
    const card = shallow(<HeaderMobile name="All articles" nav="articles" />);
    expect(card.length).toEqual(1);
  });
});