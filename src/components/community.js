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
   
  ];

  return <div className="upcomingevents  " style={{overflow:'auto',whiteSpace:'nowrap',marginTop:'5rem',marginBottom:'5rem'}}>
   {
    images.map((element)=>{
      return(
        <div className="container ml-1" style={{height:'25rem',maxWidth:'45rem',backgroundColor:'red',marginTop:'2rem',marginRight:'2rem',display:'inline-block'}}></div>
      )
    })
   }



  </div>;
}
