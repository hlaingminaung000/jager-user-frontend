import React from 'react'
import GoBackHeader from '../../goBackHeader'
import Header from '../../header'
import ParlayBody from './parlayBody'

export default function Parlay() {
  return (
    <div className='white'>
        <GoBackHeader name="Parlay"/>
        <ParlayBody/>
    </div>
  )
}
