import React from 'react'

export default function Footer() {
  return (
    <div style={{display: "flex",flexDirection: "row",justifyContent: "space-evenly",padding: "2.6rem 0",borderRadius: "20px 20px 0 0"}} className="footer-color">
      <img src={require("../assets/icons/home.svg").default} style={{width: "3rem",height: "3rem"}}/>
      <img src={require("../assets/icons/goalResult.svg").default} style={{width: "3rem",height: "3rem"}}/>
      <img src={require("../assets/icons/news.svg").default} style={{width: "3rem",height: "3rem"}}/>
      <img src={require("../assets/icons/profile.svg").default} style={{width: "3rem",height: "3rem"}}/>
    </div>
  )
}
