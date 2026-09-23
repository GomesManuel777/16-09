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
