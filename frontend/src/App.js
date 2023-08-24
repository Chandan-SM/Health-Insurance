import React from 'react'
import './App.css'
import Hero from './components/HomePage/Hero'
import NavBar from './components/HomePage/NavBar'
import Home from './components/HomePage/Home'
import Compare from './components/ComparePage/Compare'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Hero />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/compare' element={<Compare/>}/>
      
      </Routes>
    </>
  )
}

export default App