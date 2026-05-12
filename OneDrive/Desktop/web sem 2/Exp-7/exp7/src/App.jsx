import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greet from './Components/Greet'

function App() {

  return (
    <>
      <Greet name = "Virat Singh" course = "Course: Computer Science" marks = "Marks: 85"/>
      <Greet name = "Satyam Yadav" course = "Course: AI/ML" marks = "Marks: 92"/>
      <Greet name = "Rohan Gupta" course = "Course: Data Science" marks = "Marks: 87"/>
    </>
  )
}

export default App