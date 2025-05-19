import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Commitment from './Components/Commitment'
import Testimonials from './Components/Testimonials'
import Plans from './Components/Plans'
import Gallery from './Components/Gallery'
import Barbers from './Components/Barbers'

function App() {
  return (
    <div className='main bg-[#1e1f1f] p-5 w-full h-full'>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Commitment />
      <Testimonials />
      <Plans />
      <Gallery />
      <Barbers />
    </div>
  )
}

export default App
