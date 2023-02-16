import React from "react";
import { useState ,useEffect} from "react";
import osac from "../osacWhiteLogo.png"
export default function Hometop() {
  // var h=window.innerHeight

const [h, seth] = useState(window.innerWidth/Math.log(window.innerWidth)+150)
  // const h='20rem'
  

  const style={
    height:h,
    marginTop:h/4,
    marginBottom:h/2,
    // backgroundColor:'red'
  }

    useEffect(() => {
      function handleResize() {
        // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      seth(window.innerWidth/Math.log(window.innerWidth)+140)
  }
  
      window.addEventListener('resize', handleResize)
    })



  
  
  return (
    
    <div className="hometop" style={style} >


      {/* <div className="trans" >
        <section
          className="text-xl-center"
          style={{ fontSize: "10rem", color: "white" }}
        >
          OSAC
        </section>
        <section
          className="text-xl-center text-wrap"
          style={{ color: "white", fontSize: "6rem" }}
        >
          let's learn together
        </section>
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
      </div> */}

    <img src={osac} alt="" style={{height:'100%',width:'60%'}} />
    
    </div>
    
  );
}
