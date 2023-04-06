import { Routes, Route } from 'react-router-dom'
import './App.css';
import Main from './pages/Main';
import Player from './pages/Player/Player';
import CPU from './pages/CPU';
import Rules from './pages/Rules';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CPU/index.js" element={<CPU />} />
        <Route path="/Player/Player.js" element={<Player />} />
        <Route path="/Rules/index.js" element={<Rules />} />
      </Routes>
    </div>
  );
}

export default App;
