import { Route, Routes } from 'react-router-dom';
import './App.css';
import StartPage from './components/StartPage';
import Story from './components/Story';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </div>
  );
}

export default App;
