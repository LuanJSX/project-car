import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HomeBanner from '../components/HomeBanner.jsx'
import HomeCars from '../components/HomeCars.jsx'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeBanner/>
        <HomeCars/>
    </div>
  )
}

export default Home