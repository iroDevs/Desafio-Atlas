import React from 'react'
import Pesquisa from './pages/Pesquisa/Pesquisa'
import { Routes, Route } from 'react-router-dom'
function App () {
  return (
    <Routes>
      <Route exact path="/" element={<Pesquisa />} />
    </Routes>
  )
}

export default App
