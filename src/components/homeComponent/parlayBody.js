import React from 'react'

export default function ParlayBody() {
  return (
    <div>
        <div style={{display: "flex",padding: '1rem'}}>
            <div style={{display: "flex",flexDirection: "row",justifyContent: "space-evenly",flexBasis: "70%"}}>
            <img src={require("../../assets/leagues/premier-league.png")} style={{width: "3.6rem",height: "3.6rem",borderRadius: "3rem"}}/>
            <img src={require("../../assets/leagues/laliga.jpg")} style={{width: "3.6rem",height: "3.6rem",borderRadius: "3rem"}}/>
            <img src={require("../../assets/leagues/french-Ligue.png")} style={{width: "3.6rem",height: "3.6rem",borderRadius: "3rem"}}/>
            <img src={require("../../assets/leagues/serieA.png")} style={{width: "3.6rem",height: "3.6rem",borderRadius: "3rem"}}/>
            <img src={require("../../assets/leagues/bundesliga.png")} style={{width: "3.6rem",height: "3.6rem",borderRadius: "3rem"}}/>
            </div>
            <div style={{display: 'flex',alignItems: "center",padding: "0.5rem 0 1rem 1rem",backgroundColor: "#0A324D",borderRadius: "0.9rem",marginLeft: "2rem",flexBasis: "30%"}}>
                <h1 style={{margin: 0,fontSize: "1.6rem"}}>Leagues</h1>
                <img src={require("../../assets/icons/arrow-drop-down.svg").default} style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0}}/>
            </div>
        </div>
        <div style={{padding: "2rem 2rem"}}>
            <div style={{display: "flex",alignItems: 'center'}}>
               <img src={require("../../assets/leagues/serieA.png")} style={{width: "3.6rem",height: "3.6rem",borderRadius: "3rem"}}/>
               <h1 style={{fontSize: "1.9rem",marginLeft: "0.8rem"}}>Italy Serie A</h1>
            </div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div style={{padding: "2rem 2rem",backgroundColor: "#021928",position: "fixed",bottom: 0,right: 0,left: 0,zIndex: 1000}}>
            <div style={{display: 'flex'}}>
                <input id="input-amount-to-bet" placeholder='Enter the amount' style={{borderRadius: "1.2rem",border: 0,padding: "1.5rem 2rem",backgroundColor: "black",flexBasis: "70%",color: "white"}}/>
                <div style={{flexBasis: "30%",display: "flex",justifyContent: "end"}}>
                    <div style={{display: "inline-flex"}}>
                        <div style={{backgroundColor: "#87CEEB",padding: "1.1rem 2.6rem",borderRadius: "1.1rem"}}>
                            <h1 style={{margin: 0,fontSize: "1.6rem"}} className="black">Bet</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div style={{display: "flex",justifyContent: "space-between"}}>
                    <h1 style={{margin: 0,padding: "2rem 0 0 0", fontSize: "1.6rem",fontWeight: "normal"}}>
                        Type
                    </h1>
                    <h1 style={{margin: 0,padding: "2rem 0 0 0", fontSize: "1.6rem",fontWeight: "normal"}}>
                        Body
                    </h1>
                </div>
                <div style={{display: "flex",justifyContent: "space-between"}}>
                    <h1 style={{margin: 0,padding: "2rem 0 0 0", fontSize: "1.6rem",fontWeight: "normal"}}>
                        Balance
                    </h1>
                    <h1 style={{margin: 0,padding: "2rem 0 0 0", fontSize: "1.6rem",fontWeight: "normal"}}>
                        5000.00
                    </h1>
                </div>
                <div style={{display: "flex",justifyContent: "space-between"}}>
                    <h1 style={{margin: 0,padding: "2rem 0 0 0", fontSize: "1.6rem",fontWeight: "normal"}}>
                        Period
                    </h1>
                    <h1 style={{margin: 0,padding: "2rem 0 0 0", fontSize: "1.6rem",fontWeight: "normal"}}>
                        Full Time
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}


function Card() {
  return (
    <div>
        <div style={{display: "flex",marginTop: "1.8rem",marginBottom: "1rem",justifyContent: "space-between"}}>
            <div style={{display: 'inline-flex',alignItems: "center",padding: "0.5rem 0 1rem 1rem",backgroundColor: "#0A324D",borderRadius: "0.9rem"}}>
                <h1 style={{margin: 0,fontSize: "1.6rem"}}>Full Time</h1>
                <img src={require("../../assets/icons/arrow-drop-down.svg").default} style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0}}/>
            </div>
            <div style={{display: "flex",flexDirection: "column",alignItems: "end"}}>
                <h1 style={{margin: 0,fontSize: "1.3rem",fontWeight: 'normal',marginBottom: "0.3rem"}}>Match time</h1>
                <h1 style={{margin: 0,fontSize: "1.3rem",fontWeight: 'normal'}}>07-01-2023 11:30PM</h1>
            </div>
        </div>
        <div style={{backgroundColor: "#0A324D",borderRadius: "1.3rem"}}>
            <div style={{display: "flex",alignItems: "center"}}>
                <div style={{padding: "2rem 0",display: "flex",flexDirection: "column",alignItems: "center",flexBasis: "50%",borderWidth: "0 0.5px 0 0",borderStyle: "solid",borderColor: "#4F4F4F"}}>
                    <h1 style={{fontSize: "1.8rem",marginTop: 0}}>Manchester</h1>
                    <div style={{width: "6.4rem",height: "3.1rem",backgroundColor: "#87CEEB",display: 'flex',justifyContent: 'center',alignItems: "center",borderRadius: "1rem"}}>
                        <h1 style={{fontSize: "1.7rem",margin: 0}} className="black">
                            1+45
                        </h1>
                    </div>
                </div>
                <div style={{padding: "2rem 0",display: "flex",flexBasis: "50%",justifyContent: "center"}}>
                    <h1 style={{fontSize: "1.8rem"}}> Man City</h1>
                </div>
            </div>
            <div style={{display: "flex",position: 'relative'}}>
                <div style={{flexBasis: "50%",display: "flex",justifyContent: "center",borderWidth: "0.5px 0.5px 0 0",borderStyle: "solid",borderColor: "#4F4F4F"}}>
                    <h1 style={{fontSize: "1.8rem",margin: "1.5rem 0",}}>Over</h1>
                </div>
                <div style={{flexBasis: "50%",display: "flex",justifyContent: "center",borderWidth: "0.5px 0 0 0",borderStyle: "solid",borderColor: "#4F4F4F"}}>
                    <h1 style={{fontSize: "1.8rem",margin: "1.5rem 0"}}>Under</h1>
                </div>
                <div style={{position: "absolute",left: `calc(50% - 32px)`,top: `calc(50% - 15.5px)`,width: "6.4rem",height: "3.1rem",backgroundColor: "#87CEEB",display: 'flex',justifyContent: 'center',alignItems: "center",borderRadius: "1rem"}}>
                    <h1 style={{fontSize: "1.7rem",margin: 0}} className="black">
                        1+45
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

