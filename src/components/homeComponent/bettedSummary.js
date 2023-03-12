import React from 'react'
import {useLocation} from 'react-router-dom';
import {ButtonBase} from '@mui/material';
import my from "../../languages/my.json"
import en from "../../languages/en.json"
import { languageContext } from '../../context';
import GoBackHeader from '../goBackHeader';
import { Card } from './parlay/parlayBody';

export default function BettedSummary() {
  const location = useLocation();
  const {lang} = React.useContext(languageContext);
  console.log(`location.state`) 
  console.log(location.state) 
  const {selectedMatches,selectedCard,betAmount} = location.state;
  let text = (lang == "my") ? my : en;
  return (
    <div>
      <GoBackHeader name={text["Bet Summary"]}/>
      <div className='white' style={{padding: "0 2rem"}}>
         {
            selectedMatches.map((v)=>{
                let copyArr =selectedCard.length > 0 ? [...selectedCard] : []
                let obj = copyArr.filter(vv=>vv.matchId == v.matchId)[0]
                if(!obj) obj={};
                return(
                    <Card summary betTime={obj.betTime} key={v.matchId} matchData={v} handleBetMatchClick={()=>{}} selectedBetCard={obj}/>
                )
            })
        }
      </div>
      <div style={{padding: "0 2rem 1rem 2rem",marginTop: "3rem"}} className="white">
         <div style={{display: "flex",justifyContent: "center",marginBottom: "1rem"}}>
           <h3 style={{margin: 0}}>{text['Bet Summary']}</h3>
         </div>
         <div style={{padding: "1rem",border: "1px solid grey",borderRadius: "1.3rem"}}>
           <div style={{display: "flex",justifyContent: 'space-between',margin: "1rem 0"}}>
             <h4 style={{margin: 0}}>{text.Parlay}</h4>
             <h3 style={{margin: 0}}>{selectedCard.length}</h3>
           </div>
           <div  style={{display: "flex",justifyContent: 'space-between',margin: "0 0 1rem 0",paddingBottom: "1rem",borderWidth: "0 0 1px 0",borderStyle: "dotted",borderColor: "grey"}}>
             <h4 style={{margin: 0}}>{text['Betted money']}</h4>
             <h3 style={{margin: 0}}>{Number(betAmount).toFixed(2)}</h3>
           </div>
           <div  style={{display: "flex",justifyContent: 'space-between',margin: "0 0 1rem 0"}}>
             <h4 style={{margin: 0}}>{text['Estimated Win']}</h4>
             <h3 style={{margin: 0}}>3200.00</h3>
           </div>
         </div>
      </div>
      <div style={{display: "flex",justifyContent: "center",alignItems:"center",padding: "0 2rem 6rem 2rem",marginTop: "4rem"}}>
        <ButtonBase type='submit' component="button" style={{color: "white",display: "block",backgroundColor: "rgb(10, 50, 77)",padding: "1.6rem 0",borderRadius: "2rem",width: "100%",fontFamily: "inherit",justifyContent: "center",alignItems: "center"}}>
            <h4 style={{textAlign: "center",margin: 0}}>{text.Bet}</h4>
        </ButtonBase>
      </div>
    </div>
  )
}
