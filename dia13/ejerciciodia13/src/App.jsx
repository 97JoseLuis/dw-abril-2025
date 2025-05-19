import { useState } from 'react'
import './App.css'
import Menu from './components/menu'
import Carousel from './components/carousel'
import Slider from './components/slider'
import Slidert from './components/slidert'
import  Menut from './components/menut'
import CarouselComponent from './components/carouseld'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <Carousel />
      <Slider />
      <Menut />
      <CarouselComponent />
      <Slidert />
    </>
  )
}

export default App
