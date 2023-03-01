import React from 'react'
import GoBackHeader from '../goBackHeader'
import my from "../../languages/my.json"
import en from "../../languages/en.json"
import { useContext } from 'react'
import { languageContext } from '../../context'
import { ButtonBase } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react'

export default function BettedHistory() {
    const {lang} = useContext(languageContext);
    const text = lang == "my" ? my : en;
    const [filterDateOpen,setFilterDateOpen] = useState(false)
    const hanldeFilterDateClick = ()=>{
        filterDateOpen ? setFilterDateOpen(false) : setFilterDateOpen(true)
    }
  return (
    <div>
        <GoBackHeader name={text['Betted History']}/>
        <div style={{margin: "0 2rem 0 2rem"}}>
            <div style={{display: 'flex',justifyContent: "end"}}>
            <ButtonBase component="div" style={{width: "100%",padding: "1rem 0 1rem 1rem",backgroundColor: "#0A324D",borderRadius: "0.9rem",marginLeft: "2rem",flexBasis: "30%",cursor: "pointer",fontFamily: "inherit"}} onClick={hanldeFilterDateClick}>
                <h3 className='white' style={{margin: 0}}>Last 7 days</h3>
                {filterDateOpen ? <ExpandLess style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0,color: "white"}}/> : <ExpandMore style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0,color: "white"}}/>}
            </ButtonBase>
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
    const {lang} = useContext(languageContext);
    const text = lang == "my" ? my : en;
  return (
    <div  style={{paddingBottom: "2rem"}}>
        <ButtonBase component="div" style={{backgroundColor: "#0A324D",borderRadius: "2.2rem",display: "block"}}>
        <div style={{display: "flex",justifyContent: "space-between",padding: "1rem 2rem 0.1rem 2rem"}}>
            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <h3 style={{margin: 0}} className="white">
                    {text.No} CCEFBF
                </h3>
            </div>
            <div style={{display: 'flex',borderRadius: "3rem",backgroundColor: "#037762",justifyContent: 'center',alignItems: "center",padding: "0.5rem 1.5rem"}}>
                <h3 style={{margin: 0}} className="white">
                    {text.Win}
                </h3>
            </div>
        </div>
        <div style={{padding: "1.7rem 2rem"}}>
            <div style={{display: "flex",borderRadius: "1.3rem",borderWidth: "0 0 1px 0",borderStyle: "dashed",borderColor: "grey",paddingBottom: "1rem"}}>
                <div style={{display: "flex",flexBasis: "30%",justifyContent: "start",alignItems: "center"}}>
                  <h5 style={{margin: 0}} className="white"> Everton</h5>
                </div>
                <div style={{display: "flex",flexBasis: "15%",alignItems: "center"}}>
                  <img src={require("../../assets/teams/everton.png")} style={{width: "3rem",height: "3rem",borderRadius: "5rem"}}/>
                </div>
                <div style={{display: "flex",flexBasis: "15%",justifyContent: "center",alignItems: "center"}}>
                  <h4 style={{margin: 0}} className="white"> 3 - 2</h4>
                </div>
                <div style={{display: "flex",flexBasis: "15%",justifyContent: "end",alignItems: "center"}}>
                  <img src={require("../../assets/teams/brighton.png")} style={{width: "3rem",height: "3rem",borderRadius: "3rem"}}/>
                </div>
                <div style={{display: "flex",flexBasis: "30%",justifyContent: "end",alignItems: "center"}}>
                   <h5 style={{margin: 0}} className="white">Brighton</h5>
                </div>
            </div>
            <div style={{borderWidth: "0 0 1px 0",borderStyle: "dashed",borderColor: "grey"}}>
                <div style={{display: "flex"}}>
                    <div style={{display: "flex",justifyContent: "start",flexBasis: "33%"}}>
                        <h5 style={{fontWeight: "normal",margin: "0.5rem 0"}} className="white">{text.Type}</h5>
                    </div>
                    <div style={{display: "flex",justifyContent: "center",flexBasis: "33%"}}>
                        <h5 style={{fontWeight: "normal",margin: "0.5rem 0"}} className="white">{text['Your team']}</h5>
                    </div>
                    <div style={{display: "flex",justifyContent: "end",flexBasis: "33%"}}>
                        <h5 style={{fontWeight: "normal",margin: "0.5rem 0"}} className="white">{text.Odd}</h5>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div style={{display: "flex",justifyContent: "start",flexBasis: "33%"}}>
                        <h4 style={{margin: 0,marginBottom: "1.3rem"}} className="white">Body</h4>
                    </div>
                    <div style={{display: "flex",justifyContent: "center",flexBasis: "33%"}}>
                        <h4 style={{margin: 0,marginBottom: "1.3rem"}} className="white">Everton</h4>
                    </div>
                    <div style={{display: "flex",justifyContent: "end",flexBasis: "33%"}}>
                        <h4 style={{margin: 0,marginBottom: "1.3rem"}} className="white">=-45</h4>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div style={{display: "flex",justifyContent: "start",flexBasis: "33%"}}>
                        <h5 style={{fontWeight: "normal",margin: "0.5rem 0"}} className="white">{text.Period}</h5>
                    </div>
                    <div style={{display: "flex",justifyContent: "center",flexBasis: "33%"}}>
                        <h5 style={{fontWeight: "normal",margin: "0.5rem 0"}} className="white">{text['Betted money']}</h5>
                    </div>
                    <div style={{display: "flex",justifyContent: "end",flexBasis: "33%"}}>
                        <h5 style={{fontWeight: "normal",margin: "0.5rem 0"}} className="white">{text['Won money']}</h5>
                    </div>
                </div>
                <div style={{display: "flex",paddingBottom: "1rem"}}>
                    <div style={{display: "flex",justifyContent: "start",flexBasis: "33%"}}>
                        <h4 style={{margin: 0}} className="white">Full</h4>
                    </div>
                    <div style={{display: "flex",justifyContent: "center",flexBasis: "33%"}}>
                        <h4 style={{margin: 0}} className="white">500.00</h4>
                    </div>
                    <div style={{display: "flex",justifyContent: "end",flexBasis: "33%"}}>
                        <h4 style={{margin: 0}} className="white">0.00</h4>
                    </div>
                </div>
            </div>
            <div>
                <div style={{display: "flex",justifyContent: "space-between",paddingTop: "1rem"}}>
                    <h5 style={{margin: 0,fontWeight: "normal"}} className="white">{text['Betted date']}</h5>
                    <h5 style={{margin: 0,fontWeight: "normal"}} className="white">{text['Match time']}</h5>
                </div>
                <div style={{display: "flex",justifyContent: "space-between",paddingTop: "1rem"}}>
                    <h4 style={{margin: 0,fontSize: "1.3rem",fontWeight: "normal"}} className="white">06-01-2023 3:38 PM</h4>
                    <h4 style={{margin: 0,fontSize: "1.3rem",fontWeight: "normal"}} className="white">06-01-2023 3:38 PM</h4>
                </div>
            </div>
        </div>
        </ButtonBase>
    </div>
  )
}
