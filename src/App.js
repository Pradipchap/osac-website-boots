import React from "react";
import Navbar from "./components/navbar";
import Events from "./components/events";
import Main from "./components/main";
import Community from "./components/community";
import Hometop from "./components/hometop";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className='homelow'>
              
                <Hometop/>
                <div className="all-below">
                <Main />
                <Community />
                <Footer/>
              </div>
              </div>
            }
          />
          <Route exact path="/events" element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}
