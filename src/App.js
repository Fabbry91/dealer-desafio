import React from 'react'
import { Cotents } from './components/Cotents'
import { Card } from './components/Card'
import { Headers } from './components/Headers'
import { Navbar } from './components/Navbar'
import './App.css'

export const App = () => {
  return (
    <>
      <Navbar />
      <Headers />
      <Cotents />
      <Card/>
    </>
  )
}
