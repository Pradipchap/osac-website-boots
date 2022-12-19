import React from "react";
import Navbar from "./components/navbar";
import Events from "./components/events";
import Main from "./components/main";
import Community from "./components/community";
import Hometop from "./components/hometop";
import Footer from "./components/footer";
import Create from "./components/blogspost/createblog";
import Login from "./components/blogspost/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth ,provider} from "../src/components/config";

import { signInWithPopup } from "firebase/auth";

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

      window.location.pathname("/login");
    });
  };

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth",true,)

      localStorage.setItem("name",auth.currentUser.displayName,)
      setisAuth(true)
setname(auth.currentUser.displayName)
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
          name={name !== null ? name : "login"}
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
        </Routes>
        {/* <Login setisAuth={setisAuth}/> */}
      </Router>
    </>
  );
}
