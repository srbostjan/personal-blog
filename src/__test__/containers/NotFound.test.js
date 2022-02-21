import React from 'react';
import { mount, shallow } from 'enzyme';
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
    const component = create(<NotFound />);
    expect(component.toJSON()).toMatchSnapshot();
  });
})