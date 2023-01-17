import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route,Routes} from "react-router-dom"


function HomePage(){
  return(
    <div>HomePage</div>
  )
}

function AboutPage(){
  return(
    <div>AboutPage</div>
  )
}

function ErrorPage(){
  return <div><h2><i>Error 404 not found</i></h2></div>
}

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
