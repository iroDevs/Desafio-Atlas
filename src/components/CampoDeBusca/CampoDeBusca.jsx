/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import msg from '../../err/messagens'
import './CampoDeBuscaStyle.css'

export default function CampoDeBusca () {
  const [usuario, setUsuario] = useState('')

  const [alerta, setAlerta] = useState(false)
  const navigate = useNavigate()
  const campoVazioMessage = msg.campoVazio()

  function mudaEstado ({ target }) {
    setUsuario(target.value)
    console.log(usuario)
  }

  function CampoEstaVazio () {
    if (usuario.length > 0) {
      setAlerta(false)
      return false
    } else {
      setAlerta(true)
      return true
    }
  }

  function click () {
    if (!CampoEstaVazio(usuario)) {
      navigate(`/usuario/${usuario}`)
    }
  }

  useEffect(() => {

  }, [usuario])

  return (
    <div className="centralize container">
      <p className="titulo-da-busca display-6">Busque o usuario no github</p>
      <div className="container-busca">
        <label className="visually-hidden">Usuario do git</label>
        <input type="text" onChange= { mudaEstado } data-testid="campo-pesquisa" className="form-control" id="pesquisa" placeholder="Digite o nome do usuario "></input>
        <button type="button" onClick={click} className="btn-pesquisa btn btn-secondary"><IoSearchSharp /><span className='btn-texto'>Buscar</span></button>
        <i className="bi bi-1-circle"></i>
      </div>
    {
      alerta
        ? <div className="alert alert-danger" role="alert">
        {campoVazioMessage}
        </div>
        : <div></div>
    }
    </div>
  )
}
