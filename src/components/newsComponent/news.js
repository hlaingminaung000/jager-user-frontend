import React from 'react'
import {Link} from "react-router-dom"
import Footer from '../footer'
import Header from "../header"
import my from "../../languages/my.json"
import en from "../../languages/en.json"
import { useContext } from 'react'
import { languageContext } from '../../context'
import GoBackHeader from '../goBackHeader'

export default function News() {
  const {lang} = useContext(languageContext);
  const text = (lang == "my") ? my : en;
  const handleNewsDetails=()=>{

  }
  return (
    <div className='scrollable-body'>
      <GoBackHeader hideArrow name={text.News}/>
      <div style={{padding: "2rem 1.5rem"}} >
          <div style={{padding: "1.3rem 2.7rem",backgroundColor: "#0A324D",borderRadius: "2.7rem",marginBottom: "3.5rem"}}>
            <input placeholder={text['Search2...']} id='news-search' style={{border: 0,backgroundColor: "#0A324D",outline: "none",color: "white",fontWeight: "bold",fontSize: "1.6rem",padding: "0.5rem"}}/>
          </div>
          <Card handleNewsDetails={handleNewsDetails}/>
          <Card/>
          <Card/>
          <Card/>
      </div>
      <Footer/>
    </div>
  )
}


function Card({handleNewsDetails}) {
  return (
    <Link to="/newsDetails" style={{textDecoration: "none"}}>
    <div style={{padding: "2rem 2.8rem",backgroundColor: "#0A324D",borderRadius: "2.6rem",display: "flex",marginBottom: "0.9rem"}} onClick={handleNewsDetails}>
      <img src={require("../../assets/news/news1.png")} style={{width: "7rem",height: "7rem",borderRadius: "0.7rem"}}/>
      <div style={{display: "flex",flexDirection: "column",marginLeft: "1.2rem"}}>
         <h5 style={{margin: 0,fontWeight: "normal",marginBottom: "1.5rem"}} className="white">Forest dumped out of FA Cup by Blackpool</h5>
         <h6 style={{margin: 0,fontWeight: "normal"}} className="white">Lin Lin  | Jan 07,2023</h6>
      </div>
    </div>
    </Link>
  )
}




