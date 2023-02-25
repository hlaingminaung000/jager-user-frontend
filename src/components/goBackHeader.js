import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function GoBackHeader({name}) {
    const navigate = useNavigate();
    const handleGoBack=()=>{
        navigate(-1)
    }
  return (
    <div style={{position: "sticky",top: 0,right: 0,left: 0,zIndex: 1000}}>
        <div style={{position: "relative"}}>
          <img onClick={handleGoBack} src={require("../assets/icons/back-arrow.svg").default} style={{width: "4.8rem",height: "3.4rem",position: "absolute",top: "21px",left: '14px'}}/>
          <div style={{display: 'flex',justifyContent: "center",backgroundColor: "#021928",padding: "2.4rem 0"}}>
              <h1 style={{margin: 0,fontSize: "2.1rem"}} className="white">{name}</h1>
          </div>
        </div>
    </div>
  )
}
