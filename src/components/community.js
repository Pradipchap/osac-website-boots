import React, { useState } from "react";

import { useEffect } from "react";
import img from "../sdfs.png";

export default function Community() {
  var width = window.innerWidth;
  const style = {
    marginTop: "8rem",
    marginBottom: "8rem",
    display: "flex",

    alignItems: "center",
    flexDirection: width <= 1127 ? "row-reverse" : "row",
  };

  const [indexx, setindexx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (indexx === images.length - 1) setindexx(0);
      else setindexx(indexx + 1);
    }, 10000);
    return () => {
      clearInterval(id);
    };
  });

  const images = [
    {
      title: "OSM in Web Apps",
      img: img,
      desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      date: "Coming Soon",
    },
    {
      title: "OSAC Mapathon",
      img: img,
      desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      date: "Magh 15 2079",
    },
  ];

  return (
    <div className="description" style={style}>
      <div className="desc-text">
      <h2 className="text fw-bolder mb-5" style={{color:'red'}}>Our Programs</h2>
        <p className="para">{images[indexx].desc}</p>
      </div>
      <div className="desc-img mt-5" style={{ height: "30rem" }}>
        <img
          src={images[indexx].img}
          alt=""
          style={{ height: "100%", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}
