import { useState } from 'react'
import './App.css'
import EstilosDinamicos from './components/EstilosDinamicos'
import App25 from './components/app25'
import EstilosResponsivos from './components/EstilosResponsivos'
import InlineStyles from './components/InlineStyles'
import Interfaz from './components/Interfaz'
import ObjetoEstilos from './components/ObjetoEstilos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EstilosDinamicos />
      <App25 />
      <EstilosResponsivos />
      <InlineStyles />
      <ObjetoEstilos />
      <Interfaz />
    </>
  )
}

export default App
