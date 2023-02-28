import React from 'react'
import GoBackHeader from '../goBackHeader'

export default function AccountStatement() {
  return (
    <div>
        <GoBackHeader name="Account Statement"/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}


function Card() {
  return (
    <div style={{padding: "1.9rem 1.7rem"}}>
        <div style={{padding: "2.5rem 3rem",backgroundColor: "#0A324D",borderRadius: "2.2rem"}}>
            <div style={{display: "flex",flexDirection: "column",borderWidth: "0 0 1px 0",borderStyle: "dashed",borderColor: "grey"}}>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 1rem 0"}}>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">Today balance</h1>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">4,667.00</h1>
                </div>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 1rem 0"}}>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">Deposit</h1>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">0.00</h1>
                </div>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 1rem 0"}}>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">Withdrawl</h1>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">0.00</h1>
                </div>
            </div>
            <div style={{display: "flex",flexDirection: "column",borderWidth: "0 0 1px 0",borderStyle: "dashed",borderColor: "grey",marginTop: "1rem"}}>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 1rem 0"}}>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">Betted money</h1>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">-1000.00</h1>
                </div>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 1rem 0"}}>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">Commision</h1>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">0.00</h1>
                </div>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 1rem 0"}}>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">Win/lose money</h1>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">856.00</h1>
                </div>
            </div>
            <div style={{display: "flex",flexDirection: "column",marginTop: "1rem"}}>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 1rem 0"}}>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">Balance</h1>
                    <h1 style={{margin: 0,fontSize: "1.7rem"}} className="white">4523.00</h1>
                </div>
            </div>
            <div style={{display: "flex",flexDirection: "column"}}>
                    <h1 style={{margin: 0,fontSize: "1.4rem",color: "#7BF2B2"}} className="white">From Jan 07,2023 6:57PM</h1>
                    <h1 style={{margin: "1rem 0 0 0",fontSize: "1.4rem",color: "#7BF2B2"}} className="white">To Jan 07,2023 6:57PM</h1>
            </div>
        </div>
    </div>
  )
}

