import React from "react";
import pexels from "../group.jpeg"
export default function Hometop() {
  return (
    <div className="hometop" style={{background:`url(${pexels})  no-repeat `}}>
      <div className="trans">
        <section className="text head">OSAC</section>
        <section className="text sub">let's learn together</section>
      </div>
      <div
        className="join-btn"
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          backgroundColor: "#1a9e95",

          width: "200px",
          color: "white",
          height: "50px",
          display: "flex",
          alignItems: "center",

          justifyContent: "center",
          borderRadius: "15px",
          cursor: "pointer",
        }}
      >
        <p style={{ color: "white" }}>Join Us</p>
      </div>
    </div>
  );
}
