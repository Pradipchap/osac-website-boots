import React from "react";
// import { AlignCenter } from "react-feather";

export default function Hometop() {
  return (
    <div className="hometop">
      {/* <div className="text heading">OSAC</div> */}
      <div className="trans">
        <section className="text head">OSAC</section>
        <section className="text sub">let's learn together</section>

      </div>
      <div
          className="join-btn"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor:'#1a9e95',
            
            width:'200px',
            color:'white',
            height:'50px',
            display:'flex',
            alignItems:'center',
            // textAlign:'center',
            // justifyItems:'center',
            justifyContent:'center',
            borderRadius:'15px',
            cursor:'pointer'
            // alignContent:'center'
          }}
        >
          <p style={{color:'white'}}>Join Us</p>
        </div>
    </div>
  );
}
