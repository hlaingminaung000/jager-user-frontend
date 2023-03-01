import React from 'react'
import {Link} from "react-router-dom"
import parlayBackground from "../../assets/icons/parlay.svg"
import bodyUNBackground from "../../assets/icons/body-UN.svg"
import en from "../../languages/en.json"
import my from "../../languages/my.json"
import {languageContext} from "../../context"
import { useNavigate } from "react-router-dom";
import { ButtonBase } from '@mui/material';



export default function HomeBody() {
    const navigate = useNavigate();
    const {lang} = React.useContext(languageContext); 
    let text = (lang == "my") ? my : en;

    const handleNavigationClick = (link) =>{
        navigate(`${link}`);
      }
  return (
    <div style={{padding: "2rem 1.5rem"}} >
        <div className='white' style={{borderRadius: "2.2rem",background: "#2E5261",padding: "1.8rem",marginBottom: "3rem"}}>
            <h3 style={{margin: "0 0 0.7rem 0"}}>{text.Balance}</h3>
            <h2 style={{margin: 0,fontSize: "18px"}}>5000.00 MMK</h2>
        </div>
        
            
        <ButtonBase component="div"  style={{width: "100%",borderRadius: "2.2rem",marginBottom: "3rem",backgroundImage: `url(${parlayBackground})`,backgroundSize: "cover"}} onClick={()=>handleNavigationClick("/parlay")}>
            <h3 className='white' style={{margin: 0,textAlign: 'center',padding: "3.5rem 0",fontFamily: "myanmar"}}>{text.Parlay}</h3>
        </ButtonBase>
    
        <ButtonBase component="div" style={{width: "100%",borderRadius: "2.2rem",background: "#2E5261",marginBottom: "3rem",backgroundImage: `url(${bodyUNBackground})`,backgroundSize: "cover"}} onClick={()=>handleNavigationClick("/bodyUN")}>
            <h3 className='white' style={{margin: 0,textAlign: 'center',padding: "3.5rem 0"}}>{text['Body/UN']}</h3>
        </ButtonBase>
    
        <ButtonBase component="div"  style={{borderRadius: "2.2rem",background: "#0D1C44",marginBottom: "3rem",width: "100%"}} onClick={()=>handleNavigationClick("/accountStatement")}>
            <h3 className='white' style={{margin: 0,textAlign: 'center',padding: "1.7rem 0"}}>{text['Account Statement']}</h3>
        </ButtonBase>
 
        <ButtonBase component="div" style={{width: "100%",borderRadius: "2.2rem",background: "#0A324D",marginBottom: "3rem"}} onClick={()=>handleNavigationClick("/bettedHistory")}>
            <h3 className='white' style={{margin: 0,textAlign: 'center',padding: "1.7rem 0"}}>{text['Betted History']}</h3>
        </ButtonBase>

        <ButtonBase component="div" style={{width: "100%",borderRadius: "2.2rem",background: "#005853",marginBottom: "3rem"}} onClick={()=>handleNavigationClick("/checkBalance")}>
            <h3 className='white' style={{margin: 0,textAlign: 'center',padding: "1.7rem 0"}}>{text['Check Balance']}</h3>
        </ButtonBase>

    </div>
  )
}
