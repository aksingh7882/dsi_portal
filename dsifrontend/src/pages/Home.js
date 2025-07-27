import React from 'react'
import Search_section from '../components/Search_section'
import Slider from '../components/Slider'
import Header from '../components/Header'
import Home_Component_3 from '../components/Home_Component_3'
import Home_Component_4 from '../components/Home_Component_4'
import Footer from '../components/Footer'


function Home() {
  return (
  <>
  <Header></Header>
  <Search_section />
  <Slider />
  <Home_Component_3></Home_Component_3>
  <Home_Component_4></Home_Component_4>
  <Footer></Footer>
 
  </>
  )
}

export default Home
