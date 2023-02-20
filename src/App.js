import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from './components/Header/Header';
import Rockets from './components/Rockets/Rockets';
import Home from './components/Home/Home';
import Missions from './components/Mission/MissionList';
import Profile from './components/My_profile/Profile';
import store from './redux/ConfigureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Rockets />} path="/rockets" />
            <Route element={<Missions />} path="/missions" />
            <Route element={<Profile />} path="/profiles" />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
