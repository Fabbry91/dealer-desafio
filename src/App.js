import React from 'react'
import { Cotents } from './components/Cotents'
import { Footer } from './components/Footer'
import { Headers } from './components/Headers'
import { Navbar } from './components/Navbar'
import './App.css'

export const App = () => {
  return (
    <>
      <Navbar />
      <Headers />
      <div className="container">
        <Cotents />
      </div>
      <Footer/>
    </>
  )
}
