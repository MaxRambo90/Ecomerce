import { useState } from 'react'
import { SeccionNavbar } from './Components/SeccionNavbar/SeccionNavbar'
import './App.css'
import { SeccionHome } from './Components/SeccionHome/SeccionHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SeccionNavbar/>
      <SeccionHome/>
    </>
  )
}

export default App
