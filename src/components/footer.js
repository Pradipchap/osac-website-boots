import React from "react";
import { Phone } from "react-feather";
import { Mail } from "react-feather";
import { MapPin } from "react-feather";
export default function Footer() {
  return (
    
      <div className="footer">
        <div className="contact">
          <div className="title">Contact Us</div>
          <div className="contact-items">
            <div className="icon">
              <Phone />
            </div>
            <p>+977 9800712107</p>
          </div>
          <div className="contact-items">
            <div className="icon">
              <Mail />
            </div>
            <p>osacorg@gmail.com</p>
          </div>
          <div className="contact-items">
            <div className="icon">
              <MapPin />
            </div>
            <p>Lainchaur,Thamel</p>
          </div>
        </div>
        <div className="small-line"></div>
        <div className="feedback">
          <div className="title">We prefer a feedback</div>
          <div className="email">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="message">
            {/* <input className="message" type="text" name="text" id="text" size={4} placeholder="Write some feedback"/> */}
            <textarea
              name="message"
              id="m"
              cols="50"
              rows="5"
              placeholder="Write your feedback"
            ></textarea>
          </div>
          <div className="feedback-btn">
            <p>Submit</p>
          </div>
        </div>
      </div>
    
  );
}
