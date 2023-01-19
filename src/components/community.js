import React, { useState } from "react";
import js from "../js.png";

import python from "../python.jpeg";
import flutter from "../flutter.png";
import { useEffect } from "react";

export default function Community() {
  const [indexx, setindexx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (indexx === images.length - 1) setindexx(0);
      else setindexx(indexx + 1);
    }, 5000);
    return () => {
      clearInterval(id);
    };
  });

  const images = [
    {
      img: js,
      link: null,
      desc: "red",
      zindex: 1,
    },
    {
      img: python,
      link: null,
      desc: "blue",
      zindex: 2,
    },
    {
      img: flutter,
      link: null,
      desc: "green",
      zindex: 3,
    },
    {
      img: js,
      link: null,
      desc: "pink",
      zindex: 4,
    },
    {
      img: python,
      link: null,
      desc: "yellow",
      zindex: 5,
    },
  ];

  return (
    <div className="container">
      {/* {images.map((element) => {
        return (
          <div className="card"
            // key={i}
          // className={`item ${i === index ? 'item-active' : ''} card`}
           >
            <div className="card-desc">{element.desc}</div>
            <a href={element.link}>
              Read more
              {<span class="material-symbols-outlined">arrow_forward</span>}
            </a>
          </div>
        );
      })} */}
      <div className="card">

      </div>
    </div>
  );
}
