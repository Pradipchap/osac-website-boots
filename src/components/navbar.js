import React from "react";
// import { Turn as Hamburger } from "hamburger-react";
import { Search } from "react-feather";
import { useState } from "react";
import logo from "../osacWhiteLogo.png";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import { GitHub } from "react-feather";


// import LightModeIcon from '@mui/icons-material/LightMode';

export default function Navbar(props) {

  const [hamclass, sethamclass] = useState("navItems ham close");
  const [classofsidebar, setclassofsidebar] = useState("close");
  const [mode, setmode] = useState("light");
  const [navcolor, setnavcolor] = useState("#28282B");
  const clickmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#28282B";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#F5F5F5";
      setnavcolor("#28282B");
    }
  };


  const clickHamburger = () => {
    // hamclass==='navItems ham close'?sethamclass('navItems ham open'):sethamclass('navItems ham close')
    console.log("ham opened");
    if (hamclass === "navItems ham close") {
      sethamclass("navItems ham open");
      setclassofsidebar("open");
    } else {
      sethamclass("navItems ham close");
      setclassofsidebar("close");
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
          <a
            className=""
            href={"./login"}
            onClick={props.logfunc}
            style={{
              cursor: "pointer",
              marginRight: "60px",
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {/* {props.name==="login"?"login":<div className="profile"><p>{props.name.charAt(0)}</p></div >} */}
            
            {props.name}
          </a>
          <div
            className={mode}
            onClick={clickmode}
            style={{ borderRadius: "100%", marginRight: "20px" }}
          ></div>
        </div>
      </div>
      <div className="navbar" style={{ backgroundColor: `${navcolor}` }}>
        <div className="leftItems">
          <img
            src={logo}
            className="navItems logo"
            alt="logo of OSAC"
            onClick={home}
          />
          <Link className="navItems" to="/">
            <p>Home</p>
          </Link>
          <Link className="navItems" to="./events">
            <p>Events</p>
          </Link>
          <Link className="navItems" to="./blog">
            <p>Blogs</p>
          </Link>
          {/* { !props.is?<Link className="navItems" to='./login'><p>Login</p></Link>:<p className="navItems" onClick={props.logfunc} style={{cursor:'pointer'}}>Logout</p>} */}
          {props.is && (
            <Link className="navItems" to="./createblog">
              <p>create</p>
            </Link>
            )}
            {props.name==='pradipcpgn@gmail.com'&& <Link className="navItems" to="./admin">
            <p>admin</p>
          </Link>
          }
          {/* <Link className="navItems" to="./admin">
            <p>admin</p>
          </Link> */}

           
          
        </div>
        <div className="rightItems">
          <div className="navItems search">
            <p>Search {<Search />}</p>
          </div>
          <div className={hamclass} onClick={clickHamburger}>
            <div className="f f1"></div>

            <div className="f f3"></div>
          </div>
        </div>
      </div>
      {/* <Hamburger /> */}
      <Sidebar c={classofsidebar} />
    </div>
  );
}
