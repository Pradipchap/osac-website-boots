import React from 'react'
import Navbar from './components/navbar'
import Events from './components/events'
import Main from './components/main'
import Community from './components/community'
export default function App() {
  return (
<>
<Navbar/>


<Events/>

<div className="all-below">
<Main/>
<Community/>

</div>


</>
  )
}
