import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { create } from 'react-test-renderer';
import NotFound from '../../containers/NotFound';

describe('<NotFound />', () => {
  test('Render componente NotFound', () => {
    const card = shallow(<NotFound />);
    expect(card.length).toEqual(1);
  });
});
describe('NotFound Snapshot', () => {
  test('NotFound Snapshot', () => {
    const component = create(<BrowserRouter><NotFound /></BrowserRouter>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});