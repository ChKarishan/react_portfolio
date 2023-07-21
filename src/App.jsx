import React from 'react'
import './index.css'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonals from './components/testimonals/testimonals'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonals />
    <Contact />
    <Footer />
    </>
  )
}

export default App