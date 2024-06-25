import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Awards from './Components/Awards'
import Start from './Components/Start'
import Dream from './Components/Dream'
import Blog from './Components/Blog'
import Events from './Components/Events'
import Therapists from './Components/Therapists'
import Footer from './Components/Footer'
import Certification from './Components/Certification'
import Copyright from './Components/Copyright'
function App() {
  

  return (
    <>
    <Header/>
    <Hero/>
    <Awards/>
    <Start/>
    <Dream/>
    <Blog/>
    <Events/>
    <Therapists/>
    <Footer/>
    <Certification/>
    <Copyright/>
    </>
  )
}

export default App
