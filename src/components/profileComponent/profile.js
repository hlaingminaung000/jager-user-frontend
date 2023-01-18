
import React from 'react'
import Footer from '../footer'
import Header from '../header'

export default function Profile() {
  return (
    <div>
      <Header/>
        <div style={{padding: "2rem 1.5rem"}}>
           <div style={{display: "flex",padding: "2.5rem 1.5rem",backgroundColor: "#0A324D",borderRadius: "1.3rem",marginBottom: "4rem"}}>
             <div style={{borderRadius: "10rem",backgroundColor: "#005853",width: "6.5rem",height: "6.5rem",display: "flex",justifyContent: "center",alignItems: "center"}}>
              <h1 style={{fontSize: "2.5rem",fontWeight:"bolder"}}>L</h1>
             </div>
             <div style={{display: "flex",flexDirection: "column",justifyContent: "center",marginLeft: "1.5rem"}}>
               <h1 style={{margin: 0,fontSize: "1.9rem"}} className="white">Lin Gash</h1>
               <h1 style={{margin: 0,fontSize: "2.1rem"}} className="white">5000.00 MMK</h1>
             </div>
           </div>
           <div style={{backgroundColor: "#0A324D",padding: "2rem 0",display: "flex",justifyContent: "center",alignItems: "center",borderRadius: "1.3rem",marginBottom: "3rem"}}>
              <h1 style={{margin: 0,fontSize: "1.9rem"}} className="white">Rules</h1>
           </div>
           <div style={{backgroundColor: "#0A324D",padding: "2rem 0",display: "flex",justifyContent: "center",alignItems: "center",borderRadius: "1.3rem",marginBottom: "3rem"}}>
              <h1 style={{margin: 0,fontSize: "1.9rem"}} className="white">Change Language</h1>
           </div>
           <div style={{backgroundColor: "#0A324D",padding: "2rem 0",display: "flex",justifyContent: "center",alignItems: "center",borderRadius: "1.3rem",marginBottom: "3rem"}}>
              <h1 style={{margin: 0,fontSize: "1.9rem"}} className="white">Change Password</h1>
           </div>
        </div>
      <Footer/> 
    </div>
  )
}
