import React from 'react'
import { About, Contact, Experience, Hero, Navbar, Tech, Works} from "./components";
import Achievement from './components/Achievement'
import Sportlightcontrol from './components/Sportlightcontrol';
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
   <div className="relative z-0 bg-primary " >
        <div className='bg-hero-pattern bg-cover  bg-no-repeat bg-center ' >
        
          <Navbar />
          <Sportlightcontrol/>
          <Hero  />
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Achievement/>
      <Contact/>
      </div>

   
    </BrowserRouter>
  )
}



export default App