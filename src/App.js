import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/homeComponent/home';
import GoalResult from './components/goalResultComponent/goalResult';
import News from './components/newsComponent/news';
import Profile from './components/profileComponent/profile';
import Parlay from './components/homeComponent/parlay';
import CheckBalance from './components/homeComponent/checkBalance';
import BettedHistory from './components/homeComponent/bettedHistory';
import BodyUN from './components/homeComponent/bodyUN';
import AccountStatement from './components/homeComponent/accountStatement';
import NewsDetails from './components/newsComponent/newsDetails';
import "./css/style.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/goalResult" element={<GoalResult />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/newsDetails" element={<NewsDetails />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/parlay" element={<Parlay />}/>
        <Route path="/bodyUN" element={<BodyUN />}/>
        <Route path="/checkBalance" element={<CheckBalance />}/>
        <Route path="/bettedHistory" element={<BettedHistory />}/>
        <Route path="/accountStatement" element={<AccountStatement />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
