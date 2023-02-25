import React from 'react'
import {Link} from "react-router-dom"

export default function Footer() {
  return (

      <div style={{width: "390px",marginLeft: "auto",marginRight:"auto",display: "flex",flexDirection: "row",justifyContent: "space-evenly",padding: "2.6rem 0",borderRadius: "20px 20px 0 0",position: "fixed",bottom: 0,right: 0,left: 0,zIndex: 1000}} className="footer-color">
        <Link to="/">
           <img src={require("../assets/icons/home.svg").default} style={{width: "3rem",height: "3rem"}}/>
        </Link>
        <Link to="/goalResult">
          <img src={require("../assets/icons/goalResult.svg").default} style={{width: "3rem",height: "3rem"}}/>
        </Link>
        <Link to="/news">
           <img src={require("../assets/icons/news.svg").default} style={{width: "3rem",height: "3rem"}}/>
        </Link>
        <Link to="/profile">
            <img src={require("../assets/icons/profile.svg").default} style={{width: "3rem",height: "3rem"}}/>
        </Link>
      </div>

  )
}
