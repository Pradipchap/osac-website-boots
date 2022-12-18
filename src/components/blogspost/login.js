import React from "react";
import { auth, provider } from "../config";
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from "react-router-dom";

export default function Login({setisAuth}) {
  let navigate=useNavigate();
const signInWithGoogle=async()=>{
  await signInWithPopup(auth,provider).then((result)=>{
    // localStorage.setItem("isAuth",true)
    setisAuth(true);
    navigate("/");
  })

}

  return <>
  <div className="loginPage" style={{position:'absolute',marginTop:'10rem',backgroundColor:'white',display:'flex',flexDirection:'column'}}>
  <p>Sign In With Google to Continue</p>

<button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button> 

  </div>
  
  
  </>;
}
