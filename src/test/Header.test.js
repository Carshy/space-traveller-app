import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Renderer from 'react-test-renderer';
import Header from '../components/Header/Header';

function MockHeader() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

it('Renders correctly', () => {
  const tree = Renderer
    .create(<MockHeader />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
