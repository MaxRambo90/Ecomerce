import { useState } from 'react'
import { SeccionNavbar } from './Components/SeccionNavbar/SeccionNavbar'
import { MueblesExlusivos } from './Components/MueblesExlusivos/MueblesExlusivos'
import { Espaciador } from './Components/Espaciador/Espaciador'
import { SeccionHome } from './Components/SeccionHome/SeccionHome'
import './App.css'
import { CaracteristicasEspeciales } from './Components/CaracteristicasEspeciales/CaracteristicasEspeciales'
import { Ofertas } from './Components/Ofertas/Ofertas'
import { ProductosPopulares } from './Components/ProductosPopulares/ProductosPopulares'
import { ReseniaClientes } from './Components/ReseniaClientes/ReseniaClientes'
import { Footer } from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SeccionNavbar/>
      <Espaciador/>
      <SeccionHome/>
      <MueblesExlusivos/>
      <CaracteristicasEspeciales/>
      <Ofertas/>
      <ProductosPopulares/>
      <ReseniaClientes/>
      <Footer/>
    </>
  )
}

export default App
