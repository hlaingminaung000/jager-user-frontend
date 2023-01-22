import React from 'react'
import {Link} from "react-router-dom"
import Footer from '../footer'
import Header from "../header"

export default function News() {
  const handleNewsDetails=()=>{

  }
  return (
    <div>
      <Header/>
      <div style={{padding: "2rem 1.5rem"}}>
          <div style={{padding: "1.3rem 2.7rem",backgroundColor: "#0A324D",borderRadius: "2.7rem",marginBottom: "3.5rem"}}>
            <input placeholder='Search..' id='news-search' style={{border: 0,backgroundColor: "#0A324D",outline: "none",color: "white",fontWeight: "bold",fontSize: "1.9rem"}}/>
          </div>
          <Card handleNewsDetails={{handleNewsDetails}}/>
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
    <div style={{padding: "2rem 2.8rem",backgroundColor: "#0A324D",borderRadius: "2.6rem",display: "flex",marginBottom: "0.9rem"}} onClick={{handleNewsDetails}}>
      <img src={require("../../assets/news/news1.png")} style={{width: "8.8rem",height: "8rem",borderRadius: "0.7rem"}}/>
      <div style={{display: "flex",flexDirection: "column",marginLeft: "1.2rem"}}>
         <h1 style={{margin: 0,fontSize: "1.5rem",fontWeight: "normal",marginBottom: "1.5rem"}} className="white">Forest dumped out of FA Cup by Blackpool</h1>
         <h1 style={{margin: 0,fontSize: "1.2rem",fontWeight: "normal"}} className="white">Lin Lin  | Jan 07,2023</h1>
      </div>
    </div>
    </Link>
  )
}




