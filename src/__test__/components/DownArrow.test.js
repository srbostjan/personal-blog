import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import DownArrow from '../../components/DownArrow';

describe('<DownArrow />', () => {
  test('Render componente DownArrow', () => {
    const component = mount(<DownArrow />);
    expect(component.length).toEqual(1);
  });
});
describe('DownArrow Snapshot', () => {
  test('DownArrow Snapshot', () => {
    const component = create(<DownArrow />);
    expect(component.toJSON()).toMatchSnapshot();
  });
})
