import React from "react";
import js from "../js.png";

import python from "../python.jpeg";
import flutter from "../flutter.png";


// import Footer from './footer.js'

export default function Community() {
  
  const images = [
    {
      img: js,
      link: null,
      desc: "red",
      zindex:3,
      
    },
    {
      img: python,
      link: null,
      desc: "blue",
      zindex:4,
    },
    {
      img: flutter,
      link: null,
      desc: "green",
      zindex:5,
    },
    {
      img: js,
      link: null,
      desc: "pink",
      zindex:4,
    },
    {
      img: python,
      link: null,
      desc: "yellow",
      zindex:3,
      
    },
  ];

  return (
    <div className="container">
      {images.map((element) => {
        return (
          <div className="card" style={{zIndex:`${element.zindex}`}}>
            <div className="card-desc">{element.desc}</div>
            <a href={element.link}>
              Read more
              {<span class="material-symbols-outlined">arrow_forward</span>}
            </a>
          </div>
        );
      })}
    </div>
  );
}
