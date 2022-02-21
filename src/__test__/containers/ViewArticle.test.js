import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import articleMock from '../../__mocks__/articleMock';
import ViewArticle from '../../containers/ViewArticle';

describe('<ViewArticle />', () => {
  test('Render componente ViewArticle', () => {
    const card = shallow(<BrowserRouter><ViewArticle article={articleMock} /></BrowserRouter>);
    expect(card.length).toEqual(1);
  });
});