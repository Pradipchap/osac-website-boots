import React, { Component } from "react";
import pic1 from "../banner1.png";
import pic2 from "../banner2.png";
import pic3 from "../banner3.png";

export default class Events extends Component {
  render() {
    const pictures = [pic1, pic2, pic3];
    return (
      <div className="event">
        <div className="container">
          {pictures.map((src) => {
            return (
              <div className="card" key={src}>
                <div className="image"><img className="card-img-top" src={src} alt="" /></div>
                <div className="card-body">
                  <div className="heading">OSM HACKFEST 2022 </div>
                  <div className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, repellat.</div>
                </div>
              </div>

            );
          })}
        </div>
      </div>
    );
  }
}
