import { useState } from 'react'
import './App.css'
import home from './pages/home'
import contato from './pages/contato'
import sobre from './pages/sobre'

function App() {
  const [pagina, setPagina] = useState('home')
  const renderizarPagina= ()=>{
    if (pagina === 'home') return <home/>
    if (pagina === 'sobre') return <sobre/>
    if (pagina === 'contatos') return <contatos/>
  }

  return (
   <div id="container">
    
      <h1>pau</h1>
      <nav>
        <button onClick={()=>setPagina('home')}>Home</button>
        <button onClick={()=>setPagina('sobre')}>Sobre</button>
        <button  onClick={()=>setPagina('contato')}>Contato</button>
      </nav>
      <div className='conteudo'>
        {renderizarPagina()}
      </div>
   </div>
  )
}

export default App
