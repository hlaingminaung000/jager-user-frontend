import React from 'react'
import my from "../../languages/my.json"
import en from "../../languages/en.json"
import GoBackHeader from '../goBackHeader'
import { languageContext } from '../../context';

export default function Rules() {
    const {lang} = React.useContext(languageContext); 
    let text = (lang == "my") ? my : en;
  return (
    <div>
        <GoBackHeader name={text["Rules"]}/>
        <div>
            
        </div>
    </div>
  )
}
