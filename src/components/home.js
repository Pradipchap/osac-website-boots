import React from 'react'
import Hometop from './hometop'
import Main from './main'
import Community from './community'
import Footer from './footer'

export default function Home() {
  return (
<>
<div className="homelow">
<Hometop />
                <div className="all-below">
                  
                  <Main />
                  <Community />
                  <Footer />
                </div>
              </div>
</>
  )
}
