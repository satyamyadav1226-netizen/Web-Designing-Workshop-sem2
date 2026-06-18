import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greet from './component/Greet'

function App() {

  return (
    <>
      <Greet name = "Umang Singh" course = "Course: Computer Science" marks = "Marks: 85"/>
      <Greet name = "Vansh Saxena" course = "Course: AI/ML" marks = "Marks: 92"/>
      <Greet name = "Rohan Gupta" course = "Course: Data Science" marks = "Marks: 87"/>
    </>
  )
}

export default App