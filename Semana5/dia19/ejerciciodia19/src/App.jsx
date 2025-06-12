import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
function App() {
  const User = () => {
    const { id } = useParams()
    return <h1>Usuario ID: {id}</h1>
  }

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/user/ José Luis">User </Link></li>
            <li><Link to="/post/1">Ejemplo post</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/post/:id" element={<h1>Post</h1>} />
            
        </Routes>
      </Router>
    </>
  )
}

export default App