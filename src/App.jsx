import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Commitment from './Components/Commitment'
import Testimonials from './Components/Testimonials'
import Plans from './Components/Plans'
import Gallery from './Components/Gallery'
import Barbers from './Components/Barbers'
import Address from './Components/Address'
import Questions from './Components/Questions'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Template/Navbar'

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
      <Address />
      <Questions />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
