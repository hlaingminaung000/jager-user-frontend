import React from 'react'


export default function Header() {
  return (
    <div style={{display: "flex",flexDirection: "row",justifyContent: 'space-between',alignItems: "center",padding: "2.8rem 2.7rem",position: "sticky",top: 0,right: 0,left: 0,zIndex: "10000"}} className="header-color">
        <h2 style={{fontSize: "2.5rem",padding: 0,margin: 0}} className="logo-style white">
            M-Bet
        </h2>
        <div style={{display: "flex",flexDirection: "row",alignItems: "center"}}>
            <h3 style={{paddingRight: "0.8rem",margin: 0,fontSize: "1.8rem"}} className="white">
                Welcome
            </h3>
            <div style={{position: "relative"}}>
                <img src={require("../assets/icons/bell.svg").default} style={{width: "3.5rem",height: "3.5rem"}}/>
                <div style={{width: "1.4rem",height: "1.4rem",backgroundColor: "#E25050",borderRadius: "4.1rem",position:"absolute",left: "60%",top: 0}}>
                    <h1 style={{fontSize: "0.9rem",textAlign: "center",margin: 0}} className='white'>1</h1> 
                </div>
           </div>

        </div>
    </div>
  )
}
