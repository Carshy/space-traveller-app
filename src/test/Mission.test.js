import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import MissionList from '../components/Mission/MissionList';

test('renders correctly', () => {
  const tree = Renderer.create(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <MissionList />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
