import { useState } from 'react'
import { SeccionNavbar } from './Components/SeccionNavbar/SeccionNavbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SeccionNavbar/>
    </>
  )
}

export default App
