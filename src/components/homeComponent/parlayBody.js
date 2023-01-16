import React from 'react'

export default function ParlayBody() {
  return (
    <div>
        <div style={{display: "flex",padding: "0 1.7rem",padding: '1rem'}}>
            <div style={{display: "flex",flexDirection: "row",justifyContent: "space-evenly",flexBasis: "70%"}}>
            <img src={require("../../assets/leagues/premier-league.png")} style={{width: "3.6rem",height: "3.6rem",borderRadius: "3rem"}}/>
            <img src={require("../../assets/leagues/laliga.png")} style={{width: "3.6rem",height: "3.6rem",borderRadius: "3rem"}}/>
            <img src={require("../../assets/leagues/french-Ligue.png")} style={{width: "3.6rem",height: "3.6rem",borderRadius: "3rem"}}/>
            <img src={require("../../assets/leagues/serieA.png")} style={{width: "3.6rem",height: "3.6rem",borderRadius: "3rem"}}/>
            <img src={require("../../assets/leagues/bundesliga.png")} style={{width: "3.6rem",height: "3.6rem",borderRadius: "3rem"}}/>
            </div>
            <div style={{display: 'flex',alignItems: "center",padding: "0.5rem 1rem 1rem 1rem",backgroundColor: "#0A324D",borderRadius: "0.9rem",marginLeft: "2rem",flexBasis: "30%"}}>
                <h1 style={{margin: 0,fontSize: "1.6rem"}}>Leagues</h1>
                <img src={require("../../assets/icons/arrow-drop-down.svg").default} style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0}}/>
            </div>
        </div>
    </div>
  )
}
