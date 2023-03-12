import React from 'react'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ButtonBase, IconButton } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SportsSoccerRoundedIcon from '@mui/icons-material/SportsSoccerRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { useState } from 'react';
import { useContext } from 'react';
import { footerContext } from '../context';

export default function Footer() {
  const navigate = useNavigate();
  const {currentPage,changePage} = useContext(footerContext)
  const handleNavigationClick = (link) =>{
    changePage(link)
    navigate(`${link}`);
  }
  
  return (

      <div style={{width: "390px",marginLeft: "auto",marginRight:"auto",display: "flex",flexDirection: "row",justifyContent: "space-evenly",padding: "1.6rem 0",borderRadius: "20px 20px 0 0",position: "fixed",bottom: 0,right: 0,left: 0,zIndex: 1000}} className="footer-color">
         <ButtonBase   style={{width: "50px",height: "50px",borderRadius: "25px"}}  sx={{'&:hover': {opacity: "0.8"}}} onClick={()=>handleNavigationClick("/")}>
            <HomeRoundedIcon style={{width: "2.5rem",height: "2.5rem",color: `${(currentPage == "/") ? "white" : "rgb(135, 206, 235)"}`}}/>
          </ButtonBase>

          <ButtonBase  style={{width: "50px",height: "50px",borderRadius: "25px"}}  sx={{'&:hover': {opacity: "0.8"}}} onClick={()=>handleNavigationClick("/goalResult")}>
            <SportsSoccerRoundedIcon style={{width: "2.5rem",height: "2.5rem",color: `${(currentPage == "/goalResult") ? "white" : "rgb(135, 206, 235)"}`}}/>
          </ButtonBase>

          <ButtonBase  style={{width: "50px",height: "50px",borderRadius: "25px"}}  sx={{'&:hover': {opacity: "0.8"}}} onClick={()=>handleNavigationClick("/news")} >
            <MenuBookRoundedIcon style={{width: "2.5rem",height: "2.5rem",color: `${(currentPage == "/news") ? "white" : "rgb(135, 206, 235)"}`}}/>
          </ButtonBase>
 
          <ButtonBase  style={{width: "50px",height: "50px",borderRadius: "25px"}}  sx={{'&:hover': {opacity: "0.8"}}} onClick={()=>handleNavigationClick("/profile")}>
            <SettingsRoundedIcon style={{width: "2.5rem",height: "2.5rem",color: `${(currentPage == "/profile") ? "white" : "rgb(135, 206, 235)"}`}}/>
          </ButtonBase>

      </div>

  )
}
