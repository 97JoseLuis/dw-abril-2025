import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EstilosDinamicos from './components/EstilosDinamicos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EstilosDinamicos />
    </>
  )
}

export default App
