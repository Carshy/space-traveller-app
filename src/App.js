import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Header/Header';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Mission/Mission';
import Profile from './components/My_profile/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route element={<Rockets />} path="/" />
          <Route element={<Missions />} path="/missions" />
          <Route element={<Profile />} path="/profiles" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
