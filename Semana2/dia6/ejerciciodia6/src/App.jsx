import './App.css'
import Header from './components/header'


function App() {
  const menu = ["Inicio", "Productos", "Contacto"]

  return (
    <>
      <Header name="Mi Web" menu={menu} />
      <Main />
    </>
  )
}

export default App
