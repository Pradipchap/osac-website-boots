import React from 'react'
import Hometop from './hometop'
import Main from './main'
import Community from './community'
import Footer from './footer'

export default function Home() {
  return (
<>
<div className="homelow">
                <div className="all-below">
                  <Hometop />
                  <Main />
                  <Community />
                  <Footer />
                </div>
              </div>
</>
  )
}
