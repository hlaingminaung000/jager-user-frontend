import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/homeComponent/home';
import GoalResult from './components/goalResultComponent/goalResult';
import News from './components/newsComponent/news';
import Profile from './components/profileComponent/profile';
import Parlay from './components/homeComponent/parlay/parlay';
import CheckBalance from './components/homeComponent/checkBalance';
import BettedHistory from './components/homeComponent/bettedHistory';
import BodyUN from './components/homeComponent/bodyUN/bodyUN';
import AccountStatement from './components/homeComponent/accountStatement';
import NewsDetails from './components/newsComponent/newsDetails';
import "./css/style.css"
import { languageContext } from './context';

function App() {
  
  return (
      <languageContext.Provider value="my">
        <div style={{width: "390px",marginLeft: "auto",marginRight:"auto",minHeight: "100vh"}} className="body-color">
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
        </div>
      </languageContext.Provider>

  );
}

export default App;
