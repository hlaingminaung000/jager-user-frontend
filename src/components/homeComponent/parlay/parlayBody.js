import { Avatar, ListItem, ListItemButton, ListItemText, Popover, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {ButtonBase} from '@mui/material';
import FilterLeague from './filterLeagues'
import { languageContext } from '../../../context';
import en from "../../../languages/en.json"
import my from "../../../languages/my.json"

const bettingMatchesData =[
    {   
        matchId: 1,
        matchTime: "07-01-2023 11:30PM",
        teamA: "Manchester",
        teamB: "Man City",
        fullTime: {
            bodyOdd: "1+45",
            overUnderOdd: "2+50"
        },
        halfTime: {
            bodyOdd: "2+45",
            overUnderOdd: "3+50"
        } 
    },
    {
        matchId: 2,
        matchTime: "08-01-2023 11:30PM",
        teamA: "Chelsea",
        teamB: "Tottenham",
        fullTime: {
            bodyOdd: "3+85",
            overUnderOdd: "1+50"
        },
        halfTime: {
            bodyOdd: "2+45",
            overUnderOdd: "2+90"
        } 
    },
    {
        matchId: 3,
        matchTime: "08-01-2023 11:30PM",
        teamA: "Chelsea",
        teamB: "Tottenham",
        fullTime: {
            bodyOdd: "3+85",
            overUnderOdd: "1+50"
        },
        halfTime: {
            bodyOdd: "2+45",
            overUnderOdd: "2+90"
        } 
    }
]
const favLeaguesData =[
    {
        leagueId: 1,
        leagueLogo: 'premier-league.png'
    },
    {
        leagueId: 2,
        leagueLogo: "laliga.jpg"
    },
    {
        leagueId: 3,
        leagueLogo: "french-Ligue.png"
    },
    {
        leagueId: 4,
        leagueLogo: "serieA.png"
    },

    {
        leagueId: 5,
        leagueLogo: "bundesliga.png"
    },
]

export default function ParlayBody() {
    const {lang} = React.useContext(languageContext); 
    let text = (lang == "my") ? my : en;
    const [filterOpen, setFilterOpen] = useState(false)
    const [bettingMatches,setBettingMatches] = useState([])
    const [favLeagues, setFavLeagues] = useState([])
    const [filterLeagues, setFilterLeagues] = useState([])
    const [selectedBetCard,setSelectedBetCard] = useState([])
    const [betAmount,setBetAmount] =useState(0)
    useEffect(()=>{
        setFavLeagues(favLeaguesData)
        setBettingMatches(bettingMatchesData)
    },[])
    const hanldeFilterLeaguesClick =(e)=>{
       setFilterOpen(true)
    }
    const hanldeFilterLeaguesClose =(e)=>{
        setFilterOpen(false)
    }
    const handleFavLeaguesClick = (leagueId) =>{
        let copyArr = [...filterLeagues];
        (filterLeagues.includes(leagueId))? copyArr = filterLeagues.filter(v=>v != leagueId) : copyArr.push(leagueId)
        setFilterLeagues(copyArr)
    }
    const handleBetMatchClick = (e) =>{
        const copyArr = selectedBetCard.length > 0 ? [...selectedBetCard] : []
        const sameCardFound =copyArr.find(v => v.matchId == e.matchId && v.type == e.type && v.team == e.team);
        if(sameCardFound) return setSelectedBetCard(copyArr.filter(v => v.matchId != e.matchId))
        const index = copyArr.findIndex(v => v.matchId == e.matchId)
        if(index > -1) copyArr[index] = e;
        if(index == -1) copyArr.push(e)
        setSelectedBetCard(copyArr)
    }
    const handleBetClick = () =>{
        const objCopy ={...selectedBetCard};
        objCopy.betAmount = betAmount;
        setSelectedBetCard(objCopy)
        // setSelectedBetCard({})
    }
    const handleInputBalance = ({currentTarget}) =>{
        setBetAmount(currentTarget.value)
    }
    
    // console.log(selectedBetCard)
  return (
    <div >
        <div style={{display: "flex",padding: '1rem'}}>
            <div style={{display: "flex",flexDirection: "row",justifyContent: "space-evenly",flexBasis: "70%"}}>
              {favLeagues?.map((v) => {

                return (
                    <Avatar alt="Logo" key={v.leagueId} src={require(`../../../assets/leagues/${v.leagueLogo}`)} sx={{borderColor: "red",borderWidth: `${filterLeagues.includes(v.leagueId)? '2px': "0px"}`,borderStyle: 'solid',cursor: "pointer"}} onClick={()=>handleFavLeaguesClick(v.leagueId)}/>  
                )
              })}
            </div>
            {/* <> */}
                <ButtonBase style={{display: 'flex',alignItems: "center",padding: "1rem 0 1rem 1rem",backgroundColor: "#0A324D",borderRadius: "0.9rem",marginLeft: "2rem",flexBasis: "30%",cursor: "pointer",fontFamily: "inherit"}} onClick={hanldeFilterLeaguesClick}>
                    <h3 style={{margin: 0}}>{text["Leagues"]}</h3>
                    {/* <img src={require("../../../assets/icons/arrow-drop-down.svg").default} style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0}}/> */}
                    {filterOpen ? <ExpandLess style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0}}/> : <ExpandMore style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0}}/>}
                </ButtonBase>
            {/* </ButtonBase> */}
            <FilterLeague hanldeFilterLeaguesClose={hanldeFilterLeaguesClose} open ={filterOpen}/>
        </div>
        <div style={{padding: "2rem 2rem"}}>
            <div style={{display: "flex",alignItems: 'center'}}>
               <img src={require("../../../assets/leagues/serieA.png")} style={{width: "3.3rem",height: "3.3rem",borderRadius: "3rem"}}/>
               <h3 style={{marginLeft: "0.8rem"}}>Italy Serie A</h3>
            </div>
            {
                bettingMatches.map((v)=>{
                    let copyArr =selectedBetCard.length > 0 ? [...selectedBetCard] : []
                    let obj = copyArr.filter(vv=>vv.matchId == v.matchId)[0]
                    if(!obj) obj={};
                    return(
                        <Card key={v.matchId} matchData={v} handleBetMatchClick={handleBetMatchClick} selectedBetCard={obj}/>
                    )
                })
            }
        </div>
        <div style={{width: "390px",position: "fixed",bottom: 0,left: 0,right: 0,zIndex: 1000,marginLeft: "auto",marginRight: "auto"}}>
            <div style={{padding: "2rem 2rem",backgroundColor: "#021928"}}>
                <div style={{display: 'flex'}}>
                    <input autoComplete='off' type="number" id="input-amount-to-bet" placeholder={text['Enter the amount']} style={{borderRadius: "1.2rem",border: 0,padding: "1rem 2rem",backgroundColor: "black",width: "100%",color: "white",fontSize: "1.6rem"}} onChange={handleInputBalance}/>
                 
                    <ButtonBase style={{flexBasis: "50%",marginLeft: "1rem",backgroundColor: "#87CEEB",padding: "1.1rem 2.6rem",borderRadius: "1.1rem",fontFamily: "inherit"}} onClick={handleBetClick}>
                                <h3 style={{margin: 0,fontSize: "1.4rem"}} className="black">{text.Bet}</h3>
                    </ButtonBase>
              
                </div>
                <div >
                    <div style={{display: "flex",justifyContent: "space-between"}}>
                        <h5 style={{margin: 0,padding: "2rem 0 0 0", fontWeight: "normal",color: "rgb(140, 137, 137)"}}>                      
                            {text.Parlay}
                        </h5>
                        <h4 style={{margin: 0,padding: "2rem 0 0 0",fontWeight: "normal",color: "rgb(202, 197, 197)"}}>
                           {selectedBetCard.length > 0 ? selectedBetCard.length : "-"}
                        </h4>
                    </div>
                    <div style={{display: "flex",justifyContent: "space-between"}}>
                        <h5 style={{margin: 0,padding: "2rem 0 0 0", fontWeight: "normal",color: "rgb(140, 137, 137)"}}>                      
                            {text.Balance}
                        </h5>
                        <h4 style={{margin: 0,padding: "2rem 0 0 0",fontWeight: "normal",color: "rgb(202, 197, 197)"}}>
                            {Number(1000).toFixed(2)}
                        </h4>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}


function Card({matchData,handleBetMatchClick,selectedBetCard}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [matchTimeRange,setMatchTimeRange] = React.useState("Full Time");
    const open = Boolean(anchorEl);
    const handleBetTimeRangeClick = (e) => {
        (Boolean(anchorEl))? setAnchorEl(null) : setAnchorEl(e.currentTarget)
    }
    const handleBetTimeRangeOptionClick = (e) => {
        (matchTimeRange == "Full Time")? setMatchTimeRange("Half Time") : setMatchTimeRange("Full Time")
        handleBetMatchClick({})
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const bettingSelectedColor= "#0e524d"

  return (
    <div>
        <div style={{display: "flex",marginTop: "1.8rem",marginBottom: "1rem",justifyContent: "space-between"}}>
            <ButtonBase>
                <div onClick={handleBetTimeRangeClick} style={{display: 'inline-flex',alignItems: "center",padding: "1rem 0 1rem 1rem",backgroundColor: "#0A324D",borderRadius: "0.9rem",cursor: "pointer"}}>
                    <h3 style={{margin: 0}} >{matchTimeRange}</h3>
                    <Popover
                        // id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        PaperProps={{style: {borderRadius: "0.9rem"}}}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <ButtonBase>
                            <div onClick={handleBetTimeRangeOptionClick} style={{textAlign: "center",padding: "1rem 0",backgroundColor: "#87CEEB",borderRadius: "",cursor: "pointer",width: "11.5rem"}}>
                                <h3 style={{margin: 0}} className="" >{(matchTimeRange == "Full Time") ? "Half Time" :  "Full Time"}</h3>
                            </div>
                        </ButtonBase>
                        
                    </Popover>
                    {/* <img src={require("../../../assets/icons/arrow-drop-down.svg").default} style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0}}/> */}
                    {open ? <ExpandLess style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0}}/> : <ExpandMore style={{width: "3.6rem",height: "2rem",borderRadius: "3rem",marginTop: 0}}/>}
                </div>
            </ButtonBase>
            <div style={{display: "flex",flexDirection: "column",alignItems: "end"}}>
                <h1 style={{margin: 0,fontSize: "1.3rem",fontWeight: 'normal',marginBottom: "0.3rem"}}>Match time</h1>
                <h1 style={{margin: 0,fontSize: "1.3rem",fontWeight: 'normal'}}>{matchData.matchTime}</h1>
            </div>
        </div>
        <div style={{backgroundColor: "#0A324D",borderRadius: "1.3rem"}}>
            <div style={{display: "flex",alignItems: "center"}}>
                <ButtonBase style={{borderRadius: "1.3rem 0 0 0",backgroundColor: `${(selectedBetCard?.team == matchData.teamA && selectedBetCard?.matchId == matchData.matchId && selectedBetCard.choose == "win")? bettingSelectedColor : ""}`,padding: "2rem 0",display: "flex",flexDirection: "column",alignItems: "center",flexBasis: "50%",borderWidth: "0 0.5px 0 0",borderStyle: "solid",borderColor: "#4F4F4F"}} onClick={()=>handleBetMatchClick({betTime: matchTimeRange,matchId: matchData.matchId,type: "body",team: matchData.teamA,choose: "win"})}>
                    <h3 style={{marginTop: 0}}>{matchData.teamA}</h3>
                    <div style={{width: "6rem",height: "3rem",backgroundColor: "#87CEEB",display: 'flex',justifyContent: 'center',alignItems: "center",borderRadius: "1rem",cursor: "pointer"}}>
                        <h3 style={{margin: 0}} className="black">
                            {(matchTimeRange == "Full Time")? matchData.fullTime.bodyOdd : matchData.halfTime.bodyOdd}
                        </h3>
                    </div>
                </ButtonBase>
                <ButtonBase style={{borderRadius: "0 1.3rem 0 0",backgroundColor: `${(selectedBetCard?.team == matchData.teamB && selectedBetCard?.matchId == matchData.matchId && selectedBetCard.choose == "win")? bettingSelectedColor : ""}`,flexBasis: "50%",padding: "2.7rem 0"}} onClick={()=>handleBetMatchClick({betTime: matchTimeRange,matchId: matchData.matchId,type: "body",team: matchData.teamB,choose: "win"})}>
                    <h3>{matchData.teamB}</h3>
                </ButtonBase>
            </div>
            <div style={{display: "flex",position: 'relative'}}>
                <ButtonBase style={{borderRadius: "0  0 0 1.3rem",backgroundColor: `${(selectedBetCard?.choose == 'over' && selectedBetCard?.matchId == matchData.matchId)? bettingSelectedColor : ""}`,flexBasis: "50%",borderWidth: "0.5px 0.5px 0 0",borderStyle: "solid",borderColor: "#4F4F4F"}} onClick={()=>handleBetMatchClick({betTime: matchTimeRange,matchId: matchData.matchId,type: "overUnder",choose: "over",team: matchData.teamA})}>
                        <h3 style={{margin: "1.5rem 0",}}>Over</h3>
                </ButtonBase>
                <ButtonBase style={{borderRadius: "0  0 1.3rem 0",backgroundColor: `${(selectedBetCard?.choose == 'under' && selectedBetCard?.matchId == matchData.matchId)? bettingSelectedColor : ""}`,flexBasis: "50%",borderWidth: "0.5px 0 0 0",borderStyle: "solid",borderColor: "#4F4F4F"}} onClick={()=>handleBetMatchClick({betTime: matchTimeRange,matchId: matchData.matchId,type: "overUnder",choose: "under",team: matchData.teamB})}>
                        <h3 style={{margin: "1.5rem 0"}}>Under</h3>
                </ButtonBase>
                <div style={{position: "absolute",left: `calc(50% - 30px)`,top: `calc(50% - 15px)`,width: "6rem",height: "3rem",backgroundColor: "#87CEEB",display: 'flex',justifyContent: 'center',alignItems: "center",borderRadius: "1rem",cursor: "pointer"}}>
                    <h3 style={{margin: 0}} className="black">
                       {(matchTimeRange == "Full Time")? matchData.fullTime.overUnderOdd : matchData.halfTime.overUnderOdd}
                    </h3>
                </div>
            </div>
        </div>
    </div>
  )
}

