import React from 'react';
import { mount, shallow } from 'enzyme';
import articleMock from '../../__mocks__/articleMock';
import ArticleCard from '../../components/Articles/ArticleCard';

describe('<ArticleCard />', () => {
  test('Render componente ArticleCard', () => {
    const card = shallow(<ArticleCard article={articleMock} />);
    expect(card.length).toEqual(1);
  });
});