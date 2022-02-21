import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Biography from '../../containers/Biography';

describe('<Biography />', () => {
  const component = shallow(<Biography />);
  test('Render componente Biography', () => {
    expect(component.length).toEqual(1);
  });
  test('Render Titulo biografia', () => {
    expect(component.find('.biography--titles--title').text()).toEqual('Sebas Rivera');
  });
});
describe('Biography Snapshot', () => {
  test('Biography Snapshot', () => {
    const component = create(<BrowserRouter><Biography /></BrowserRouter>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});