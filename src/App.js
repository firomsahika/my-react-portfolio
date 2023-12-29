import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
const App = () => {
  return (
    <div>
    <Nav/>
    <Home/>
    <About />
    <Portfolio/>
    <Experience/>
    <Contact/>

    <SocialLinks/>
    </div>
  )
}

export default App
