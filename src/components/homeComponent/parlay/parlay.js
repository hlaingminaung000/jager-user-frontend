import React from 'react'
import GoBackHeader from '../../goBackHeader'
import ParlayBody from './parlayBody'
import my from "../../../languages/my.json"
import en from "../../../languages/en.json"
import { languageContext } from '../../../context'

export default function Parlay() {
  const {lang} = React.useContext(languageContext); 
  let text = (lang == "my") ? my : en;
  return (
    <div className='white scrollable-parlay-body'>
        <GoBackHeader name={text.Parlay}/>
        <ParlayBody/>
    </div>
  )
}
