import { useState } from 'react'
import './App.css'
import Alerta from './components/Alerta'
import Botón from './components/Botón'
import Avatar from './components/Avatar'
import Contenedor from './components/Contenedor'
import Perfil from './components/Perfil'
import Productos from './components/Producto'
import Saludo from './components/Saludo'
import Tarea from './components/Tarea'
import Tarjeta from './components/Tarea2'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Alerta />
      <Botón />
      <Avatar />
      <Contenedor />
      <Perfil />
      <Productos />
      <Saludo />
      <Tarea />
      <Tarjeta />
    </>
  )
}

export default App
