import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/homeComponent/home';
import GoalResult from './components/goalResultComponent/goalResult';
import News from './components/newsComponent/news';
import Profile from './components/profileComponent/profile';
import Parlay from './components/homeComponent/parlay';
import "./css/style.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/goalResult" element={<GoalResult />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/parlay" element={<Parlay />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
