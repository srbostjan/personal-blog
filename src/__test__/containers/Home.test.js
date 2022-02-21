import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Home from '../../containers/Home';

describe('<Home />', () => {
  const component = shallow(<Home />);
  test('Render componente Home', () => {
    expect(component.length).toEqual(1);
  });
  test('Render de titulo', () => {
    expect(component.find('h1').text()).toEqual('Frontend Developer');
  })
});
describe('Home Snapshot', () => {
  test('Home Snapshot', () => {
    const component = create(<Home />);
    expect(component.toJSON()).toMatchSnapshot();
  });
})