import React, { Component } from "react";
import js from "../js.png";
import python from "../python.jpeg";
import flutter from "../flutter.png";
// import Footer from './footer.js'
export default class Community extends Component {
  render() {
    const images = [js, python, flutter];
    return (
      
      <div className="community">
        <div className="title">Our Active Communities and Program</div>

        <div className="programs">
          {images.map((src) => {
            return (
                <div className="cardd" key={src}>
                    <img src={src}  className="program-img" alt="programs" />

                </div>
              
            );
          })}
        </div>
        
      </div>
      
      
    );
  }
}
