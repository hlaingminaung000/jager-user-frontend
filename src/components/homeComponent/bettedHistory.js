import React from 'react'
import GoBackHeader from '../goBackHeader'

export default function BettedHistory() {
  return (
    <div>
        <GoBackHeader name="Betted History"/>
        <div style={{margin: "0 2rem 0 2rem"}}>
            <div style={{display: 'flex',justifyContent: "end"}}>
                <div style={{display: 'flex',alignItems: "center",padding: "1.5rem 0 1.5rem 1.5rem",backgroundColor: "#0A324D",borderRadius: "0.9rem",margin: "2.2rem 0"}}>
                    <h1 style={{margin: 0,fontSize: "1.6rem"}} className="white">Last 7 days</h1>
                    <img src={require("../../assets/icons/arrow-drop-down.svg").default} style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0}}/>
                </div>
            </div>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
        </div>
    </div>
  ) 
}



function Card() {
  return (
    <div style={{paddingBottom: "2rem"}}>
        <div style={{backgroundColor: "#0A324D",borderRadius: "2.2rem"}}>
        <div style={{display: "flex",justifyContent: "space-between",padding: "1rem 2rem"}}>
            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <h1 style={{margin: 0,fontSize: "1.9rem"}} className="white">
                    No CCEFBF
                </h1>
            </div>
            <div style={{display: 'flex',borderRadius: "3rem",backgroundColor: "#037762",justifyContent: 'center',alignItems: "center",padding: "1.2rem 1.7rem"}}>
                <h1 style={{margin: 0,fontSize: "1.9rem"}} className="white">
                    Win
                </h1>
            </div>
        </div>
        <div style={{padding: "1.7rem 2.5rem"}}>
            <div style={{display: "flex",borderRadius: "1.3rem",borderWidth: "0 0 1px 0",borderStyle: "dashed",borderColor: "grey",paddingBottom: "1rem"}}>
                <div style={{display: "flex",flexBasis: "30%",justifyContent: "start",alignItems: "center"}}>
                  <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white"> Everton</h1>
                </div>
                <div style={{display: "flex",flexBasis: "15%"}}>
                  <img src={require("../../assets/teams/everton.png")} style={{width: "3.7rem",height: "3.7rem",borderRadius: "5rem"}}/>
                </div>
                <div style={{display: "flex",flexBasis: "10%",justifyContent: "center",alignItems: "center"}}>
                  <h1 style={{margin: 0,fontSize: "1.9rem"}} className="white"> 3-2</h1>
                </div>
                <div style={{display: "flex",flexBasis: "15%",justifyContent: "end"}}>
                  <img src={require("../../assets/teams/brighton.png")} style={{width: "3.7rem",height: "3.7rem",borderRadius: "3rem"}}/>
                </div>
                <div style={{display: "flex",flexBasis: "30%",justifyContent: "end",alignItems: "center"}}>
                   <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">Brighton</h1>
                </div>
            </div>
            <div style={{borderWidth: "0 0 1px 0",borderStyle: "dashed",borderColor: "grey"}}>
                <div style={{display: "flex"}}>
                    <div style={{display: "flex",justifyContent: "start",flexBasis: "33%"}}>
                        <h1 style={{fontWeight: "normal",fontSize: "1.5rem"}} className="white">Type</h1>
                    </div>
                    <div style={{display: "flex",justifyContent: "center",flexBasis: "33%"}}>
                        <h1 style={{fontWeight: "normal",fontSize: "1.5rem"}} className="white">Your team</h1>
                    </div>
                    <div style={{display: "flex",justifyContent: "end",flexBasis: "33%"}}>
                        <h1 style={{fontWeight: "normal",fontSize: "1.5rem"}} className="white">Odd</h1>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div style={{display: "flex",justifyContent: "start",flexBasis: "33%"}}>
                        <h1 style={{margin: 0,marginBottom: "1.3rem",fontSize: "1.6rem"}} className="white">Body</h1>
                    </div>
                    <div style={{display: "flex",justifyContent: "center",flexBasis: "33%"}}>
                        <h1 style={{margin: 0,marginBottom: "1.3rem",fontSize: "1.6rem"}} className="white">Everton</h1>
                    </div>
                    <div style={{display: "flex",justifyContent: "end",flexBasis: "33%"}}>
                        <h1 style={{margin: 0,marginBottom: "1.3rem",fontSize: "1.6rem"}} className="white">=-45</h1>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div style={{display: "flex",justifyContent: "start",flexBasis: "33%"}}>
                        <h1 style={{fontWeight: "normal",fontSize: "1.5rem"}} className="white">Time</h1>
                    </div>
                    <div style={{display: "flex",justifyContent: "center",flexBasis: "33%"}}>
                        <h1 style={{fontWeight: "normal",fontSize: "1.5rem"}} className="white">Amount</h1>
                    </div>
                    <div style={{display: "flex",justifyContent: "end",flexBasis: "33%"}}>
                        <h1 style={{fontWeight: "normal",fontSize: "1.5rem"}} className="white">Revenue</h1>
                    </div>
                </div>
                <div style={{display: "flex",paddingBottom: "1rem"}}>
                    <div style={{display: "flex",justifyContent: "start",flexBasis: "33%"}}>
                        <h1 style={{margin: 0,fontSize: "1.6rem"}} className="white">Full</h1>
                    </div>
                    <div style={{display: "flex",justifyContent: "center",flexBasis: "33%"}}>
                        <h1 style={{margin: 0,fontSize: "1.6rem"}} className="white">500.00</h1>
                    </div>
                    <div style={{display: "flex",justifyContent: "end",flexBasis: "33%"}}>
                        <h1 style={{margin: 0,fontSize: "1.6rem"}} className="white">0.00</h1>
                    </div>
                </div>
            </div>
            <div>
                <div style={{display: "flex",justifyContent: "space-between",paddingTop: "1rem"}}>
                    <h1 style={{margin: 0,fontSize: "1.4rem",fontWeight: "normal"}} className="white">Bet time</h1>
                    <h1 style={{margin: 0,fontSize: "1.4rem",fontWeight: "normal"}} className="white">Match time</h1>
                </div>
                <div style={{display: "flex",justifyContent: "space-between",paddingTop: "1rem"}}>
                    <h1 style={{margin: 0,fontSize: "1.3rem",fontWeight: "normal"}} className="white">06-01-2023 3:38 PM</h1>
                    <h1 style={{margin: 0,fontSize: "1.3rem",fontWeight: "normal"}} className="white">06-01-2023 3:38 PM</h1>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
