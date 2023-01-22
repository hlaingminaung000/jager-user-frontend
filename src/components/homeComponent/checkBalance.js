import React from 'react'
import GoBackHeader from '../goBackHeader'

export default function CheckBalance() {
  return (
    <div>
        <GoBackHeader name={"Balance"}/>
        <div style={{display: 'flex',justifyContent: "space-between",padding: "0.9rem 2.7rem",backgroundColor: "#2E5261",marginBottom: "1.8rem"}}>
           <h1 style={{margin: 0,fontSize: "2.1rem"}}>Total</h1>
           <h1 style={{margin: 0,fontSize: "2.1rem"}}>4,667.00 MMK</h1>
        </div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
    </div>
  )
}


function Card() {
  return (
    <div style={{display: 'flex',justifyContent: "space-between",padding: "2rem 1.5rem",margin: "1.5rem 1.5rem",backgroundColor: "#0A324D",borderRadius: "1rem"}}>
      <div style={{display: 'flex',flexDirection: "column"}}>
        <h1 style={{margin: "0 0 0.5rem 0",fontSize: "1.7rem",fontFamily: "'Inter'"}} className="white">Bet Outstanding</h1>
        <h1 style={{margin: 0,fontSize: "1.2rem",fontWeight: "normal"}} className="white">Jan 07,2023 6:57PM</h1>
      </div>
      <div style={{display: 'flex',justifyContent: "center",alignItems: "center"}}>
        <h1 className='white' style={{margin: 0,fontSize: "1.7rem"}}>742.00</h1>
      </div>
   </div>
  )
}

