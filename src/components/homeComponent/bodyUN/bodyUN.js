import React from 'react'
import GoBackHeader from '../../goBackHeader'
import BodyUNBody from './bodyUNBody'
import my from "../../../languages/my.json"
import en from "../../../languages/en.json"
import { languageContext } from '../../../context'

export default function BodyUN() {
  const {lang} = React.useContext(languageContext); 
  let text = (lang == "my") ? my : en;
  return (
    <div className='white scrollable-bodyOver'>
        <GoBackHeader name={text['Body/UN']}/>
        <BodyUNBody/>
    </div>
  )
}
