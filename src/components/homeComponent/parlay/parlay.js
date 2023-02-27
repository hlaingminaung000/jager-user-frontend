import React from 'react'
import GoBackHeader from '../../goBackHeader'
import ParlayBody from './parlayBody'

export default function Parlay() {

  return (
    <div className='white scrollable-parlay-body'>
        <GoBackHeader name="Parlay"/>
        <ParlayBody/>
    </div>
  )
}
