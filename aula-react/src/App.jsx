import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Contato from './pages/contato'
import Sobre from './pages/sobre'
import { Link, Route, Routes } from 'react-router'

function App() {
  
  return (
   <div id="container">
      <h1>Sejam bem-vindos a aula de React!</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/sobre'>Sobre</Link>
        <Link to='/contato'>Contato</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Routes>
   </div>
  )
}

export default App
