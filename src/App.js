import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';

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
