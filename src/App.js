import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Header/Header';
import RocketList from './components/Rockets/RocketList';
import Missions from './components/Mission/Mission';
import Profile from './components/My_profile/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route element={<RocketList />} path="/" />
          <Route element={<Missions />} path="/missions" />
          <Route element={<Profile />} path="/profiles" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
