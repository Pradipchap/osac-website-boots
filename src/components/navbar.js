import React from "react";
// import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import logo from "../osacWhiteLogo.png";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hamclass, sethamclass] = useState('navItems ham close');
  const [classofsidebar, setclassofsidebar] = useState('close')
 const clickHamburger=()=>{
  // hamclass==='navItems ham close'?sethamclass('navItems ham open'):sethamclass('navItems ham close')
  console.log('ham opened')
  if(hamclass==='navItems ham close')
  {
    sethamclass('navItems ham open')
    setclassofsidebar('open')
  }
  else
  {
    sethamclass('navItems ham close')
    setclassofsidebar('close')
  }

  }
  // const [first, setfirst] = useState(second)

  return (
    <div>
      <div className="navbar">
        
      <div className={hamclass} onClick={clickHamburger}>
        <div className="f f1"></div>
        <div className="f f2"></div>
        <div className="f f3"></div>
      </div>
        <div className="leftItems">
          <img src={logo} className="navItems logo" alt="logo of OSAC" />
          <Link className="navItems" to='/'>HOME</Link>
          <Link className="navItems" to='./events' >EVENTS</Link>
          <div className="navItems">NOTICES</div>
        </div>
        <div className="rightItems">
          <div className="navItems">WANT TO BE A MEMBER ?</div>
          <div className="navItems search">SEARCH</div>

        </div>
        
      </div>
      {/* <Hamburger /> */}
      <Sidebar c={classofsidebar}/>
    </div>
  );
}
