import React, { useContext } from 'react'
import GoBackHeader from '../goBackHeader'
import my from "../../languages/my.json"
import en from "../../languages/en.json"
import { languageContext } from '../../context'

export default function CheckBalance() {
  const {lang} = useContext(languageContext);
  const text = (lang == "my") ? my : en;
  return (
    <div>
        <GoBackHeader name={text.Balance}/>
        <div style={{display: 'flex',justifyContent: "space-between",padding: "0.9rem 2.7rem",backgroundColor: "#2E5261",marginBottom: "1.8rem"}}>
           <h3 style={{margin: 0}}>{text.Total}</h3>
           <h3 style={{margin: 0}}>4,667.00 MMK</h3>
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
        <h4 style={{margin: "0 0 0.5rem 0",fontFamily: "'Inter'"}} className="white">Bet Outstanding</h4>
        <h1 style={{margin: 0,fontSize: "1.2rem",fontWeight: "normal"}} className="white">Jan 07,2023 6:57PM</h1>
      </div>
      <div style={{display: 'flex',justifyContent: "center",alignItems: "center"}}>
        <h3 className='white' style={{margin: 0}}>742.00</h3>
      </div>
   </div>
  )
}

