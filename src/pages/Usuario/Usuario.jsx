/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Perfil from '../../components/Perfil/Perfil'
import msg from '../../err/messagens'
import api from '../../api/GitHubApi'
import rascunho from './rascunho'
export default function Usuario () {
  const { nome } = useParams()
  const [usuario, setUsuario] = useState({})
  const [repositorios, setRepositorios] = useState([{}])
  const [loading, setLoading] = useState(true)
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(false)

  const messagemDeErro = msg.usuarioNaoEncontrado()
  useEffect(() => {
    async function CapturandoUsuario (nome) {
      // const retornoDaApi = await api.PegueUmUsuarioPeloNome(nome)
      const retornoDaApi = rascunho.rascunhoUsuario
      setUsuario(retornoDaApi)
      setLoading(false)
    }
    async function CapturandoRepositorios (nome) {
      // const retornoDaApi = await api.PegueRepositoriosPeloNomeDeUsuario(nome)
      const retornoDaApi = rascunho.rascunhoRepositorios
      setRepositorios(retornoDaApi)
      setLoading(false)
    }

    CapturandoUsuario(nome)
    CapturandoRepositorios(nome)
  }, [])

  useEffect(() => {
    if (usuario.status === 200) {
      setUsuarioEncontrado(true)
    }
  }, [usuario])

  if (loading) {
    return (
        <div className="display-2 loading">Carregando...</div>
    )
  }

  if (!usuarioEncontrado) {
    return (
    <div className="alert alert-danger" role="alert">
  {messagemDeErro + ' '}<Link to="/">Voltar</Link>
</div>
    )
  }

  return (
    <div className="usuario-container container-fluid">
        <Perfil dados={usuario} />

    </div>
  )
}
