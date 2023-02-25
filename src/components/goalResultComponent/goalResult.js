import React from 'react'
import Footer from '../footer'
import Header from "../header"

export default function GoalResult() {
  return (
    <div >
      <Header/>
      <div style={{padding: "2rem"}}>
        <div style={{display: "flex",justifyContent: "end"}}>
            <div style={{display: 'flex',alignItems: "center",padding: "1rem 0 1rem 1rem",backgroundColor: "#0A324D",borderRadius: "0.9rem",marginLeft: "2rem"}}>
              <h1 style={{margin: 0,fontSize: "1.6rem"}} className="white">Today</h1>
              <img src={require("../../assets/icons/arrow-drop-down.svg").default} style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0}}/>
            </div>
        </div>
        <div>
            <div style={{display: "flex",alignItems: 'center'}}>
              <img src={require("../../assets/leagues/serieA.png")} style={{width: "3.8rem",height: "3.5rem",borderRadius: "3rem"}}/>
              <h1 className='white' style={{fontSize: "1.8rem",marginLeft: "0.8rem"}}>Italy Serie A</h1>
            </div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

function Card() {
  return (
    <div style={{display: "flex",backgroundColor: "#0A324D",padding: "1.7rem",borderRadius: "1.3rem",margin: "2rem 0"}}>
      <div style={{display: "flex",flexBasis: "30%"}}>
        <h1 style={{margin: 0,fontSize: "1.4rem"}} className="white"> Barcelona</h1>
      </div>
      <div style={{display: "flex",flexBasis: "15%"}}>
        <img src={require("../../assets/teams/barcelona.png")} style={{width: "2.6rem",height: "1.9rem",borderRadius: "3rem"}}/>
      </div>
      <div style={{display: "flex",flexBasis: "10%",justifyContent: "center",alignItems: "center"}}>
        <h1 style={{margin: 0,fontSize: "1.4rem"}} className="white"> 3-2</h1>
      </div>
      <div style={{display: "flex",flexBasis: "15%",justifyContent: "end"}}>
        <img src={require("../../assets/teams/atheletic.png")} style={{width: "2.6rem",height: "1.9rem",borderRadius: "3rem"}}/>
      </div>
      <div style={{display: "flex",flexBasis: "30%",justifyContent: "end"}}>
         <h1 style={{margin: 0,fontSize: "1.4rem"}} className="white">Athletic</h1>
      </div>
    </div>
  )
}