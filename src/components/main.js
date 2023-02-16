import React from "react";
import ascol from "../group.jpeg";
import { useState } from "react";
export default function Main() {
  const [view, setview] = useState("false");
  const changevalueonScroll = () => {
    const scrollvalue = document.documentElement.scrollTop;

    if (scrollvalue > 618) {
      setview("true");
    } else setview("false");
  };
  window.addEventListener("scroll", changevalueonScroll);
  return (
    <div className="description">
      <div className="desc-img">
        <img src={ascol} className="group-photo" alt="group " />
      </div>

      <div className="desc-text">
        <p className="about-us" style={{ color: "black" }}>
About Us
        </p>
        <p className="para" style={{}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          dolore minima rerum, tempora aperiam aut minus ipsum vero deserunt.
          Commodi quas voluptate eos libero unde odit nam quam! Deleniti sunt
          tempore esse amet alias ut molestias veniam repudiandae facilis quo
          commodi sapiente eos tenetur neque incidunt accusamus reiciendis, fuga
          ipsam itaque enim voluptates recusandae necessitatibus? Asperiores
          enim voluptatem architecto sequi totam. Ex odio possimus quae eaque

        </p>

        <button
          className=" buttonbtn bg-info p-2"
          style={{ width: "7rem", fontSize: "17px" }}
        >
          Join Us
        </button>
      </div>
    </div>
  );
}
