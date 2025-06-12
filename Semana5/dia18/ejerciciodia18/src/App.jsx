import { useState } from 'react'
import { UserProvider, UserName } from './components/UserContext'
import { CounterProvider, CounterButtons } from './components/CounterContext'
import { ThemeProvider, ThemeToggleButton } from './components/ThemeContext'
import { LanguageProvider, LanguageToggleButton } from './components/LanguageContext'
import { AuthProvider, AuthButton } from './components/AuthContext'
import { CartProvider } from './components/CartContext'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <UserName />
      </UserProvider>
      <CounterProvider>
        <CounterButtons />
      </CounterProvider>
      <ThemeProvider>
        <ThemeToggleButton />
      </ThemeProvider>
      <LanguageProvider>
        <LanguageToggleButton />
      </LanguageProvider>
      <AuthProvider>
        <AuthButton />
      </AuthProvider>
      <CartProvider>
        <h1>Mi Tienda</h1>
        <ProductList />
        <Cart />
      </CartProvider>

    </>
  )
}

export default App
