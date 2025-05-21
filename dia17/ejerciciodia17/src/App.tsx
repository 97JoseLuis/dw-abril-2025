import './App.css'
import ButtonTextField from './components/ButtonTextField'
import ContadorIncremento from './components/ContadorIncremento'
import ValorPrevio from './components/ValorPrevio'
import Temporizador from './components/Temporizador'
import ScrollAlFinal from './components/ScrollAlFinal'
import ChatEnVivo from './components/ChatEnVivo'
import ListaMensajeChat from './components/ListaMensajeChat'

function App() {

  return (
    <>
      <ButtonTextField />
      <ContadorIncremento />
      <ValorPrevio />
      <Temporizador />
      <ScrollAlFinal />
      <ChatEnVivo />
      <ListaMensajeChat />
    </>
  )
}

export default App
