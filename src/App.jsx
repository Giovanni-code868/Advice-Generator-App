import { useState } from 'react'
import AdviceGenerator from './Component/AdviceGenerator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AdviceGenerator/> 
    </>
  )
}

export default App
