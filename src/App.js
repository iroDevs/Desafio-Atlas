import React from 'react'
import Pesquisa from './pages/Pesquisa/Pesquisa'
import { Routes, Route } from 'react-router-dom'
import Usuario from './pages/Usuario/Usuario'
function App () {
  return (
    <Routes>
      <Route exact path="/" element={<Pesquisa />} />
      <Route exact path="/usuario/:nome" element={<Usuario />} />
    </Routes>
  )
}

export default App
