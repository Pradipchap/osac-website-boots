import React from "react";
// import { auth, provider } from "../config";
// import { signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from  '@mui/icons-material/Google';

export default function Login(props) {
  // let navigate = useNavigate();
  // const signInWithGoogle = async () => {
  //   await signInWithPopup(auth, provider).then((result) => {
  //     localStorage.setItem("isAuth",true,)

  //     localStorage.setItem("name",auth.currentUser.displayName,)
  //     setisAuth(true)

  //     navigate("/");
  //   });
  // };


  return (
    <div className="login">
      <div className="loginPage">
        <p>Sign In With Google to Continue</p>

        
        <div className="login-with-google-btn" onClick={props.signInWithGoogle}>
        <GoogleIcon fontSize="large"/> <p style={{color:'white'}}>Sign with google</p>
        </div>
        <p>Sign In With Facebook to Continue</p>

        <div className="login-with-google-btn" onClick={props.signInWithGoogle}>
          <FacebookIcon fontSize="large"/> <p style={{color:'white'}}>Sign with Facebook</p>
        </div>
      </div>
    </div>
  );
}
