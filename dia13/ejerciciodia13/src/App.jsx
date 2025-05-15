import { useState } from 'react'
import './App.css'
import Menu from './components/menu'
import Carrousel from './components/carrousel'
import Slider from './components/slider'
import Slidert from './components/slidert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <Carrousel />
      <Slider />
      <Slidert />
    </>
  )
}

export default App
