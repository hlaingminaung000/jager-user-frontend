import React from 'react'
import Footer from '../footer'
import Header from '../header'
import HomeBody from './homeBody'

export default function Home() {
  return (
    <div className='scrollable-body'>
      <Header/>
      <HomeBody/>
      <Footer/>
    </div>
  )
}
