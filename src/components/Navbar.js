import React from "react";
import logo from "../img/airbnb.png"

export default function Navbar(){
  return (
    <nav className="nav">
      <img src={logo} className="nav-logo" alt="logo"/>
    </nav>
  )
}