import React from 'react';
import { mount, shallow } from 'enzyme';
import Articles from '../../containers/Articles';

describe('<Articles />', () => {
  test('Render componente Articles', () => {
    const card = shallow(<Articles />);
    expect(card.length).toEqual(1);
  });
});