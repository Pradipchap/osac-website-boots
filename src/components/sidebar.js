import React from "react";
import { Home } from "react-feather";
import { User } from "react-feather";
import { Book } from 'react-feather';
import { Bookmark } from 'react-feather';
 import { Search } from 'react-feather';
 import { Link } from "react-router-dom";
export default function Sidebar(props) {
  return (
    <div className={`sidebar${props.c}`}>
      <div className="sidebar-items">
        <Link className="sidebar-contents" to='/'>
        <p>{<Home height='20px'/>}  Home</p>
        </Link>
      </div>
      <Link className="sidebar-items" to='./events'>
      <div className="sidebar-contents">
         <p>{<Book height='20px'/>}  Events</p>
        </div>
      </Link>
      <div className="sidebar-items">
      <div className="sidebar-contents">
      <p>{<Bookmark height='20px'/>}  News</p>
          
        </div>
      </div>
      <div className="sidebar-items">
      <div className="sidebar-contents">
      <p>{<User height='20px'/>}  Join US</p>
        </div>
      </div>
      <div className="sidebar-items">
      <div className="sidebar-contents">
      <p>{<Search height='20px'/>}  Search</p>
        </div>
      </div>
    </div>
  );
}
