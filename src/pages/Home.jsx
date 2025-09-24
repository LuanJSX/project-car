import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HomeBanner from '../components/HomeBanner.jsx'
import HomeCars from '../components/HomeCars.jsx'
import Testimorial from '../components/Testimorial.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeBanner/>
        <HomeCars/>
        <Testimorial/>
        <Footer/>
    </div>
  )
}

export default Home