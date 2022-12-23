import React from "react";
import Navbar from "./components/navbar";
import Events from "./components/events";
import Main from "./components/main";
import Community from "./components/community";
import Hometop from "./components/hometop";
import Footer from "./components/footer";
import Create from "./components/blogspost/createblog";
import Login from "./components/blogspost/login";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth ,provider} from "../src/components/config";

import { signInWithPopup } from "firebase/auth";
import Admin from "./components/admin";
import Blog from "./components/blogspost/blog";


export default function App() {
 
  const [isAuth, setisAuth] = useState(localStorage.getItem("isAuth"));
  // const [name, setname] = useState(localStorage.getItem("name"));
  // if(auth===null){
  // setname('Login')
  // }
  const [name, setname] = useState(localStorage.getItem("name"));

  console.log(localStorage.getItem("isAuth"));

  const logout = () => {
    signOut(auth).then(() => {
      setname("Login");
      localStorage.clear();
      setisAuth(false);
      
      

    });
  };
  const username=()=>{
    if(name!==null)
    return name
    else
    return "login";
  }

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth",true,)

      localStorage.setItem("name",auth.currentUser.email,)
      localStorage.setItem("uid",auth.currentUser.uid,)
      setisAuth(true)
setname(auth.currentUser.email)
      window.location.pathname("/");
    });
  };

  return (
    <>
      <Router>
        {/* <Navbar is={isAuth} logfunc={logout} user={user!==null&&user.displayName}/> */}
        <Navbar
          is={isAuth}
          logfunc={logout}
          // name={name !== null ? name : "login"}
          name={username()}
          setname={setname}

          
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="homelow">
                <div className="all-below">
                  <Hometop />
                  <Main />
                  <Community />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route exact path="/events" element={<Events />} />
          <Route
            exact
            path="/createblog"
            element={<Create isAuth={isAuth} />}
          />
          <Route
            exact
            path="/login"
            element={<Login setisAuth={setisAuth} signInWithGoogle={signInWithGoogle} />}
          />
          <Route exact path='/blog' element={<Blog />}/>
          {username()==="pradipcpgn@gmail.com"? <Route
            exact
            path="/admin"
            element={<Admin />}
          />:
          <Route
          exact
          path="/"
          element={
            <div className="homelow">
              <div className="all-below">
                <Hometop />
                <Main />
                <Community />
                <Footer />
              </div>
            </div>
          }
        />}
           {/* <Route
            exact
            path="/admin"
            element={<Admin/>}
            from='/'
          /> */}
        </Routes>
        {/* <Login setisAuth={setisAuth}/> */}
      </Router>
    </>
  );
}
