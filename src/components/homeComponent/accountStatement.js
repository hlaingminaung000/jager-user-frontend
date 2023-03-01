import React from 'react'
import GoBackHeader from '../goBackHeader'
import my from "../../languages/my.json"
import en from "../../languages/en.json"
import { useContext } from 'react'
import { languageContext } from '../../context'

export default function AccountStatement() {
    const {lang} = useContext(languageContext)
    const text = (lang == "my") ? my : en;
  return (
    <div>
        <GoBackHeader name={text['Account Statement']}/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}


function Card() {
    const {lang} = useContext(languageContext)
    const text = (lang == "my") ? my : en;
  return (
    <div style={{padding: "1.9rem 1.7rem"}}>
        <div style={{padding: "2rem 2.5rem",backgroundColor: "#0A324D",borderRadius: "2.2rem"}}>
            <div style={{display: "flex",flexDirection: "column",borderWidth: "0 0 1px 0",borderStyle: "dashed",borderColor: "grey"}}>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 0.8rem 0"}}>
                    <h5 style={{margin: 0,fontWeight: "normal"}} className="white">{text['Yesterday balance']}</h5>
                    <h4 style={{margin: 0,fontWeight: "bold"}} className="white">4,667.00</h4>
                </div>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 0.8rem 0"}}>
                    <h5 style={{margin: 0,fontWeight: "normal"}} className="white">{text.Deposit}</h5>
                    <h4 style={{margin: 0,fontWeight: "bold"}} className="white">0.00</h4>
                </div>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 0.8rem 0"}}>
                    <h5 style={{margin: 0,fontWeight: "normal"}} className="white">{text.Withdrawl}</h5>
                    <h4 style={{margin: 0,fontWeight: "bold"}} className="white">0.00</h4>
                </div>
            </div>
            <div style={{display: "flex",flexDirection: "column",borderWidth: "0 0 1px 0",borderStyle: "dashed",borderColor: "grey",marginTop: "0.8rem"}}>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 0.8rem 0"}}>
                    <h5 style={{margin: 0,fontWeight: "normal"}} className="white">{text['Betted money']}</h5>
                    <h4 style={{margin: 0,fontWeight: "bold"}} className="white">-1000.00</h4>
                </div>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 0.8rem 0"}}>
                    <h5 style={{margin: 0,fontWeight: "normal"}} className="white">{text.Commision}</h5>
                    <h4 style={{margin: 0,fontWeight: "bold"}} className="white">0.00</h4>
                </div>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 0.8rem 0"}}>
                    <h5 style={{margin: 0,fontWeight: "normal"}} className="white">{text['Win/lose money']}</h5>
                    <h4 style={{margin: 0,fontWeight: "bold"}} className="white">856.00</h4>
                </div>
            </div>
            <div style={{display: "flex",flexDirection: "column",marginTop: "0.8rem"}}>
                <div style={{display: "flex",justifyContent:"space-between",margin: "0 0 0.8rem 0"}}>
                    <h5 style={{margin: 0,fontWeight: "normal"}} className="white">{text.Balance}</h5>
                    <h4 style={{margin: 0,fontWeight: "bold"}} className="white">4523.00</h4>
                </div>
            </div>
            <div style={{display: "flex",flexDirection: "column"}}>
                <h1 style={{margin: 0,fontSize: "1.1rem",color: "#7BF2B2",fontWeight: "normal"}} className="white">{lang == "my" ? `2023-02-27 ${text['From Evening 12 o\'clock']}`: `${text['From Evening 12 o\'clock']},2023-02-27`}</h1>
                <h1 style={{margin: "0.8rem 0 0 0",fontSize: "1.1rem",color: "#7BF2B2",fontWeight: "normal"}} className="white">{(lang == "my") ? `2023-02-27 ${text['To Evening 12 o\'clock']}` : `${text['To Evening 12 o\'clock']},2023-02-27`}</h1>
            </div>
        </div>
    </div>
  )
}

