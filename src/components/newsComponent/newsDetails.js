import React from 'react'
import Footer from '../footer'
import GoBackHeader from '../goBackHeader'

export default function NewsDetails() {
  return (
    <div >
        <GoBackHeader name="News"/>
        <div>
          <img src={require("../../assets/news/news2.png")} style={{width: "100%",height: "23.6rem",marginBottom: "1.9rem"}}/>
           <h1 style={{margin: 0,fontSize: "1.8rem",color: "#D8BFBF",padding: "0 1.5rem 1.2rem 1.5rem"}}>Manchester United legend Eric Cantona launches sport art exhibition</h1>
           <h1 style={{margin: 0,fontSize: "1.6rem",fontWeight: "normal",color: "grey",padding: "0 1.5rem 1.2rem 1.5rem"}}>khun wunna | Jan 18,2023 12:00 Am</h1>
           <h1 style={{margin: 0,fontSize: "1.6rem",fontWeight: "normal",padding: "0 1.5rem 1.2rem 1.5rem"}} className="white">
            The football legend helped to curate the show,
             which also features artist Michael Browne's depictions of soccer icon Diego Maradona, boxer Muhammad Ali and Olympic athlete Jesse Owens.
            Browne said he wanted to highlight those "who have been fighting against injustices throughout the world".
            Cantona said he hoped the display would encourage interest among children.
           </h1>
           <h1 style={{margin: 0,fontSize: "1.6rem",fontWeight: "normal",padding: "0 1.5rem 1.2rem 1.5rem"}} className="white">Ref:BBC</h1>
        </div>
        <Footer/>
    </div>
  )
}
