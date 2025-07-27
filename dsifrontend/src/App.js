import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Property_Dli_Ncr from './pages/Property_Dli_Ncr'


function App() {
  return (
    <>

  <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/Property Delhi-NCR' element={<Property_Dli_Ncr></Property_Dli_Ncr>} ></Route>
    </Routes>
    </>
  )
}

export default App
