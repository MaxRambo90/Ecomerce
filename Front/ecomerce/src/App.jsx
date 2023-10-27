import { useState } from 'react'

import './App.css'
import { SeccionNavbar } from './Components/SeccionNavbar/SeccionNavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SeccionNavbar/>
    </>
  )
}

export default App
