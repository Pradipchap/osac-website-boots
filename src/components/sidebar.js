import React from "react";
import { Home } from "react-feather";
import { User } from "react-feather";
import { Book } from 'react-feather';
import { Bookmark } from 'react-feather';
 import { Search } from 'react-feather';
export default function Sidebar(props) {
  return (
    <div className={`sidebar${props.c}`}>
      <div className="sidebar-items">
        <div className="sidebar-contents">
          <Home />
          <p>Home</p>
        </div>
      </div>
      <div className="sidebar-items">
      <div className="sidebar-contents">
          <Book />
          <p>Events</p>
        </div>
      </div>
      <div className="sidebar-items">
      <div className="sidebar-contents">
          <Bookmark />
          <p>
            News
          </p>
        </div>
      </div>
      <div className="sidebar-items">
      <div className="sidebar-contents">
          <User />
          <p>Join us</p>
        </div>
      </div>
      <div className="sidebar-items">
      <div className="sidebar-contents">
          <Search />
          <p>Search</p>
        </div>
      </div>
    </div>
  );
}
