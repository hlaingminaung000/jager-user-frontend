import React, { useContext } from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Footer from '../footer'
import Header from "../header"
import { useState } from 'react';
import { ButtonBase } from '@mui/material';
import {Tab, Tabs} from '@mui/material'
import { useEffect } from 'react';
import moment from 'moment';
import GoBackHeader from '../goBackHeader';
import my from "../../languages/my.json"
import en from "../../languages/en.json"
import { languageContext } from '../../context';


export default function GoalResult() {
  const {lang} = useContext(languageContext)
  const text = (lang == "my") ? my : en;
  const [filterOpen, setFilterOpen] = useState(false)
  const [days,setDay] = useState([])
  const [dayIndex,setDayIndex] = useState()
  const [selectedDayName,setSelectedDayName] = useState("Today")

  useEffect(()=>{
    setDay(getCurrentMonthDays());
  },[])
  useEffect(()=>{
    const todayIndex = days.findIndex(day => day.toLowerCase() === "today");
    setDayIndex(todayIndex)
  },[days])
  
  const handleFilterClick = () =>{
    (filterOpen) ? setFilterOpen(false) : setFilterOpen(true)
  }
  const getCurrentMonthDays = () =>{
    const moment = require('moment');
    const thisMonth = moment();
    const numDays = thisMonth.daysInMonth();
    const today = moment();
    const daysArray = [];
    for (let i = 1; i <= numDays; i++) {
      const day = moment(`${thisMonth.format('YYYY-MM')}-${i}`, 'YYYY-MM-DD');
      if (day.isSame(today, 'day')) {
        daysArray.push("today");
      } else {
        daysArray.push(day.format('MMM D'));
      }
    }
    return daysArray;
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const handleDayChange = (day,index) =>{
    setDayIndex(index);
    setSelectedDayName(capitalizeFirstLetter(day));
    setFilterOpen(false)
   
  }
  useEffect(()=>{
     //server call
     const date = moment().startOf('month').add(dayIndex, 'days').format('YYYY-MM-DD');
    //  console.log(date)
  },[dayIndex])

  return (
    <div className='scrollable-body'>
      <GoBackHeader hideArrow name={text['Goal Result']}/>
      <div style={{padding: "2rem"}} >
        <div style={{display: "flex",flexDirection: "column"}}>
          <div style={{display: 'flex',justifyContent: "end"}}>
            <ButtonBase style={{alignItems: "center",padding: "1rem 0 1rem 1rem",backgroundColor: "#0A324D",borderRadius: `${filterOpen? "0.9rem 0.9rem 0 0" : "0.9rem"}`,marginLeft: "2rem",fontFamily: "inherit"}} onClick={handleFilterClick}>
              <h4 style={{margin: 0}} className="white">{selectedDayName}</h4>
              {filterOpen ? <ExpandLess style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0,color: "white"}}/> : <ExpandMore style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0,color: 'white'}}/>}
            </ButtonBase>
          </div>
            {filterOpen &&
                 <Tabs
                  value={dayIndex}  indicatorColor="primary"
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example"
                  sx={{fontFamily: "inherit",borderRadius: "0.9rem 0 0.9rem 0.9rem",backgroundColor: "rgb(10, 50, 77)",color: "white",".css-1aquho2-MuiTabs-indicator": {backgroundColor: "#87CEEB"},".css-85ccme-MuiButtonBase-root-MuiTab-root.Mui-selected": {color: "#87CEEB"},".css-85ccme-MuiButtonBase-root-MuiTab-root": {textTransform: "none"}}}
                  
                >
                    {days.map((day, index) => 
                    { 
                    return (
                      <Tab key={index} label={capitalizeFirstLetter(day)} sx={{fontFamily: 'inherit',color: 'white',fontSize: "1.2rem"}} onClick={()=>handleDayChange(day,index)}/>
                    )})}
              </Tabs> }
        </div>
        <div>
          <div>
              <div style={{display: "flex",alignItems: 'center'}}>
                <img src={require("../../assets/leagues/serieA.png")} style={{width: "3rem",height: "3rem",borderRadius: "3rem"}}/>
                <h3 className='white' style={{marginLeft: "0.8rem"}}>Italy Serie A</h3>
              </div>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

function Card() {
  return (
    <div style={{display: "flex",backgroundColor: "#0A324D",padding: "1.7rem",borderRadius: "1.3rem",margin: "2rem 0"}}>
      <div style={{display: "flex",flexBasis: "30%"}}>
        <h5 style={{margin: 0}} className="white"> Barcelona</h5>
      </div>
      <div style={{display: "flex",flexBasis: "15%"}}>
        <img src={require("../../assets/teams/barcelona.png")} style={{width: "2.6rem",height: "1.9rem",borderRadius: "3rem"}}/>
      </div>
      <div style={{display: "flex",flexBasis: "10%",justifyContent: "center",alignItems: "center"}}>
        <h5 style={{margin: 0}} className="white"> 3-2</h5>
      </div>
      <div style={{display: "flex",flexBasis: "15%",justifyContent: "end"}}>
        <img src={require("../../assets/teams/atheletic.png")} style={{width: "2.6rem",height: "1.9rem",borderRadius: "3rem"}}/>
      </div>
      <div style={{display: "flex",flexBasis: "30%",justifyContent: "end"}}>
         <h5 style={{margin: 0}} className="white">Athletic</h5>
      </div>
    </div>
  )
}