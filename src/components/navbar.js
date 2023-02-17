import React from "react";
// import { Turn as Hamburger } from "hamburger-react";

import { useState } from "react";
import logo from "../osacWhiteLogo.png";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import { GitHub } from "react-feather";

export default function Navbar(props) {
  const linktologin = () => {
    if (props.name === "login") return "./login";
    else return null;
  };

  
  const [drop, setdrop] = useState(false);
  const [hamclass, sethamclass] = useState("navItems ham close");
  const [classofsidebar, setclassofsidebar] = useState("close");
const [navclass, setnavclass] = useState('navclose')
  const dropdown = () => {
    if (drop === false) setdrop(true);
    else setdrop(false);
  };
  const handlelogout = () => {
    setdrop(false);
    props.logfunc();
  };
  const style = {
    display:'flex',

    flexDirection:classofsidebar==='open'?'column':'row',
    transition: "height 1.5s ease-in-out",
    // marginTop:'40px'
    
  };

  const clickHamburger = () => {
    console.log("ham opened");
    if (hamclass === "navItems ham close") {
      sethamclass("navItems ham open");
      setclassofsidebar("open");
      setnavclass('navopen mt-3 mb-2')
    } else {
      sethamclass("navItems ham close");
      setclassofsidebar("close");
      setnavclass('navclose');
    }
  };

  
  const home = () => {
    window.location = "/";
  };
  // const [first, setfirst] = useState(second)

  return (
    <div className="topbar">
      <div className="join">
        <a
          className="first"
          style={{
            cursor: "pointer",
            color: "white",
            textDecoration: "none",
            marginLeft: "30px",
          }}
          href="https://github.com/OSAC/OSAC-Forum"
          target="_"
        >
          Take a look at our <strong>Github</strong>
          {<GitHub height="20px" />}
        </a>
        <div className="second">
          {props.name !== "login" && drop === true && (
            <div className="drop">
              <div className="close" onClick={() => setdrop(false)}></div>
              <ul>
                <li>my Account</li>
                <li>
                  <div onClick={handlelogout} style={{ cursor: "pointer" ,}}>
                    logout
                  </div>
                </li>
              </ul>
            </div>
          )}
          <a
            className=""
            href={linktologin()}
            onClick={dropdown}
            style={{
              cursor: "pointer",
              marginRight: "60px",
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {props.name === "login" ? "login" : props.name}
          </a>
        </div>
      </div>
      <div className="nabar" style={style}>
        <img
          src={logo}
          className={`navItems logo ${navclass}`}
          alt="logo of OSAC"
          onClick={home}
        />
        <Link className={`navItems ${navclass}`} to="/">
          <p>Home</p>
        </Link>

        <Link className={`navItems ${navclass}`} to="./blog">
          <p>Blogs</p>
        </Link>

        {props.is && (
          <Link className={`navItems ${navclass}`}to="./createblog">
            <p>create</p>
          </Link>
        )}
        {props.name === "pradipcpgn@gmail.com" && (
          <Link className="navItems" to="./admin">
            <p>admin</p>
          </Link>
        )}
        <div className={hamclass+' '+navclass} onClick={clickHamburger}>
          <div className="f f1"></div>

          <div className="f f3"></div>
        </div>
      </div>

      <Sidebar c={classofsidebar} />
    </div>
  );
}
