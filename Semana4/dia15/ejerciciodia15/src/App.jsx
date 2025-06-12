import { useState } from 'react'
import './App.css'
import UsuarioGitHub from './components/UsuarioGitHub'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsuarioGitHub />
    </>
  )
}

export default App
