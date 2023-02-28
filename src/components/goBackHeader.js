import React from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

export default function GoBackHeader({name}) {
    const navigate = useNavigate();
    const handleGoBack=()=>{
        navigate(-1)
    }
  return (
    <div style={{position: "sticky",top: 0,right: 0,left: 0,zIndex: 1000}}>
        <div style={{position: "relative"}}>
          {/* <img onClick={handleGoBack} src={require("../assets/icons/back-arrow.svg").default} style={{width: "4.8rem",height: "3.4rem",position: "absolute",top: "21px",left: '14px'}}/> */}
          <IconButton color='white' onClick={handleGoBack} style={{position: "absolute",top: "13px",left: '10px'}} sx={{'&:hover': {opacity: "0.8"}}}>
            <ArrowBackIcon style={{width: "4.8rem",height: "3.4rem",color: "white"}}/>
          </IconButton>
          <div style={{display: 'flex',justifyContent: "center",backgroundColor: "#021928",padding: "2.4rem 0"}}>
              <h2 style={{margin: 0}} className="white">{name}</h2>
          </div>
        </div>
    </div>
  )
}
