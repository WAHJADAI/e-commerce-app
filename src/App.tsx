import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route,Routes} from "react-router-dom"
import HomePage from 'pages/HomePage'
import AboutPage from 'pages/AboutPage'
import ErrorPage from 'pages/ErrorPage'

function App() {


  return (
    <div >
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default App
