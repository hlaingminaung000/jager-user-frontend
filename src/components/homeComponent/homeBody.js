import React from 'react'
import {Link} from "react-router-dom"
import parlayBackground from "../../assets/icons/parlay.svg"
import bodyUNBackground from "../../assets/icons/body-UN.svg"

export default function HomeBody() {
  return (
    <div style={{padding: "2rem 1.5rem"}}>
        <div className='white' style={{borderRadius: "2.2rem",background: "#2E5261",padding: "1.8rem",marginBottom: "3rem"}}>
            <h1 style={{fontSize: "2rem",margin: "0 0 0.7rem 0"}}>Balance</h1>
            <h1 style={{fontSize: "2.1rem",margin: 0}}>5000.00 MMK</h1>
        </div>
        <Link to="/parlay" style={{textDecoration: "none"}}>
            <div className='white' style={{borderRadius: "2.2rem",marginBottom: "3rem",backgroundImage: `url(${parlayBackground})`,backgroundSize: "cover"}}>
                <h1 style={{fontSize: "2rem",margin: 0,textAlign: 'center',padding: "3.5rem 0"}}>Parlay</h1>
            </div>
        </Link>
        <div className='white' style={{borderRadius: "2.2rem",background: "#2E5261",marginBottom: "3rem",backgroundImage: `url(${bodyUNBackground})`,backgroundSize: "cover"}}>
            <h1 style={{fontSize: "2rem",margin: 0,textAlign: 'center',padding: "3.5rem 0"}}>Body/UN</h1>
        </div>
        <div className='white' style={{borderRadius: "2.2rem",background: "#0D1C44",marginBottom: "3rem"}}>
            <h1 style={{fontSize: "2rem",margin: 0,textAlign: 'center',padding: "1.7rem 0"}}>Account Statement</h1>
        </div>
        <div className='white' style={{borderRadius: "2.2rem",background: "#0A324D",marginBottom: "3rem"}}>
            <h1 style={{fontSize: "2rem",margin: 0,textAlign: 'center',padding: "1.7rem 0"}}>Betted History</h1>
        </div>
        <div className='white' style={{borderRadius: "2.2rem",background: "#005853",marginBottom: "3rem"}}>
            <h1 style={{fontSize: "2rem",margin: 0,textAlign: 'center',padding: "1.7rem 0"}}>Check Balance</h1>
        </div>
    </div>
  )
}
