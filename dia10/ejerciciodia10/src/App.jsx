import { useState } from 'react'
import './App.css'
import AlertaBoton from './components/AlertaBoton'
import TextInput from './components/CampoTexto'
import CambioColorFondo from './components/ColorFondo'
import Counter from './components/contador'
import ContadorAleatorio from './components/ContadorAleatorio'
import Formulario from './components/Formulario'
import ListaElementos from './components/ListaElementos'
import AlternarBoton from './components/On-Off'
import DetectarTecla from './components/TeclaEspecifica'
import Temporizador from './components/Temporizador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AlertaBoton />
      <TextInput />
      <CambioColorFondo />
      <Counter />
      <ContadorAleatorio />
      <Formulario />
      <ListaElementos />
      <AlternarBoton />
      <DetectarTecla />
      <Temporizador />
    </>
  )
}

export default App
