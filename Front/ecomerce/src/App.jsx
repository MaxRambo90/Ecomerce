import { useState } from 'react'
import { SeccionNavbar } from './Components/SeccionNavbar/SeccionNavbar'
import './App.css'
import { MueblesExlusivos } from './Components/MueblesExlusivos/MueblesExlusivos'
import { Espaciador } from './Components/Espaciador/Espaciador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SeccionNavbar/>
      <Espaciador/>
      <MueblesExlusivos/>
    </>
  )
}

export default App
