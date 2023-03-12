import React from 'react'
import { useContext } from 'react'
import GobackHeader from "../goBackHeader"
import my from '../../languages/my.json'
import en from '../../languages/en.json'
import { languageContext } from '../../context';

export default function BettedDetail() {
    const {lang} = useContext(languageContext)
    let text = (lang == "my") ? my : en;
  return (
    <div>
      <GobackHeader name={text['Bet Detail']}/>
      <div style={{padding: "0 2rem"}} className="white">
        <div style={{padding: "1rem",marginTop: "1rem",display: "flex",justifyContent: "space-between",backgroundColor: "rgb(2, 25, 40)",borderRadius: "1rem"}}>
            <div style={{display: "flex",flexDirection: "column"}}>
                <div style={{display: "flex"}}>
                    <h5 style={{color: "#c2c2c2",fontWeight: "normal",margin: "0 0.4rem 1rem 0"}}>{text.No}</h5>
                    <h5 style={{color: "rgb(240 240 240)",fontWeight: "normal",margin: "0 0 1rem 0"}}>7B971C</h5>
                </div>
                <h5 style={{color: "#c2c2c2",fontWeight: "normal",margin: "0 0 0.8rem 0"}}>{text.Parlay}</h5>
                <h4 style={{color: "rgb(240 240 240)",margin: "0 0 1rem 0"}}>5</h4>
                <h5 style={{fontWeight: "normal",margin: 0,color: "#c2c2c2"}}>06-01-2023 3:38 PM</h5>
            </div>
            <div style={{display: "flex",flexDirection: "column"}}>
                <h5 style={{color: "#c2c2c2",fontWeight: "normal",margin: "0 0 0.8rem 0"}}>{text['Betted money']}</h5>
                <h4 style={{color: "rgb(240 240 240)",margin: "0 0 1rem 0"}}>500.00</h4>
                <h5 style={{color: "#c2c2c2",fontWeight: "normal",margin: "0 0 0.8rem 0"}}>{text['Won money']}</h5>
                <h4 style={{margin: 0,color: "rgb(28 191 162)"}}>900.00</h4>
            </div>
            <div style={{display: "flex",flexDirection: "column"}}>
                <div style={{padding: "0.6rem 0.8rem",backgroundColor: "rgb(3, 119, 98)",borderRadius: "1rem",fontWeight: "bold"}}>
                   {text.Win}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
