import React, { Component } from 'react'
import logo from '../logo.png'
export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className="leftItems">
       <img src={logo} className="navItems logo" alt="logo of OSAC" />
        <div className="navItems">HOME</div>
        <div className="navItems">EVENTS</div>
        <div className="navItems">NOTICES</div>
        </div>
        <div className="rightItems">
        <div className="navItems">WANT TO BE A MEMBER ?</div>
        <div className="navItems search">SEARCH</div>

        </div>


      </div>
    )
  }
}
