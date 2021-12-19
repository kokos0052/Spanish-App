import { Route, Routes } from "react-router-dom";
import "./App.css";
import Questions from "./components/Questions";
import StartPage from "./components/StartPage";
import Story from "./components/Story";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/story" element={<Story />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </div>
  );
}

export default App;
