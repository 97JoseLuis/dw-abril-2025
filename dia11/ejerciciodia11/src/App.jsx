import { useState } from 'react'
import './App.css'
import Aplicacion from './components/Aplicacion'
import BotonCambio from './components/BotonCambio'
import BotonCuadrado from './components/BotonCuadrado'
import APP from './components/APP'
import ListaInteractiva1 from './components/ListaInteractiva1'
import ListaInteractiva2 from './components/ListaInteractiva2'
import ListaInteractiva3 from './components/ListaInteractiva3'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Aplicacion />
      <BotonCambio />
      <BotonCuadrado />
      <APP />
      <ListaInteractiva1 />
      <ListaInteractiva2 />
      <ListaInteractiva3 />
    </>
  )
}

export default App
