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
import { auth } from "../src/components/config";

export default function App() {
  const [isAuth, setisAuth] = useState(false);

  const logout=()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setisAuth(false);
      window.location.pathname("/login");
    })
  }
  return (
    <>
      <Router>
        <Navbar is={isAuth} logfunc={logout}/>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className='homelow'>
              
               
                <div className="all-below">
                <Hometop/>
                <Main />
                <Community />
                <Footer/>
              </div>
              </div>
            }
          />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/createblog" element={<Create/>}/>
          <Route exact path="/login" element={<Login setisAuth={setisAuth}/>}/>        </Routes>
      </Router>
    </>
  );
}
