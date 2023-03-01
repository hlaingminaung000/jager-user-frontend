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
import { languageContext,footerContext } from './context';
import { useState } from 'react';

function App() {
  const [lang,setLang] = useState("my");
  const [currentPage,setPage] = useState();
  console.log(`window.innerHeight`)
  console.log(window.innerHeight)
  const changeLang = (l) =>{
    setLang(l)
  }
  const changePage = (p) =>{
    setPage(p)
  }
  
  return (
      <languageContext.Provider value={{lang,changeLang}}>
         <footerContext.Provider value={{currentPage,changePage}}>
          <div style={{width: "390px",marginLeft: "auto",marginRight:"auto",minHeight: "100vh",fontFamily: `${lang == "my" ? "myanmar" : "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif"}`}} className="body-color">
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
        </footerContext.Provider>
      </languageContext.Provider>

  );
}

export default App;
