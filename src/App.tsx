import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route,Routes} from "react-router-dom"
import HomePage from 'pages/HomePage'
import AboutPage from 'pages/AboutPage'
import ErrorPage from 'pages/ErrorPage'
import Navbar from 'pages/Navbar'
import SignIn from 'pages/SignIn'

function App() {


  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='SignIn' element={<SignIn/>}/>
      </Routes>
    </div>
  )
}

export default App
