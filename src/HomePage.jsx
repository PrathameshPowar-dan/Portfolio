import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'
import Projects from './Components/projects/projects'
import Footer from './Components/foot/footer'

export default function HomePage() {

  return (
    <>
        <Navbar />
        <Body />
        <Projects />
        <Footer />
    </>
  )
}
