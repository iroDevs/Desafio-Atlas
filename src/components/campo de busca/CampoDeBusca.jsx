import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import './CampoDeBuscaStyle.css'

export default function CampoDeBusca () {
  const [usuario, setUsuario] = useState('')

  function mudaEstado ({ target }) {
    setUsuario(target.value)
    console.log(usuario)
  }
  return (
    <div className="centralize container">
      <p className="titulo-da-busca display-6">Busque o usuario no github</p>
      <div className="container-busca">
        <label className="visually-hidden">Usuario do git</label>
        <input type="text" onChange= { mudaEstado } className="form-control" id="pesquisa" placeholder="Digite o nome do usuario "></input>
        <button type="button" className="btn-pesquisa btn btn-secondary"><IoSearchSharp /><span className='btn-texto'>Buscar</span></button>
        <i className="bi bi-1-circle"></i>
      </div>
    </div>
  )
}
