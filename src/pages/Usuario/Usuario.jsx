/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api/GitHubApi'
export default function Usuario () {
  const { nome } = useParams()
  const [usuario, setUsuario] = useState({})
  const [repositorios, setRepositorios] = useState([{}])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function CapturandoUsuario (nome) {
      const retornoDaApi = await api.PegueUmUsuarioPeloNome(nome)
      setUsuario(retornoDaApi)
      setLoading(false)
    }
    async function CapturandoRepositorios (nome) {
      const retornoDaApi = await api.PegueRepositoriosPeloNomeDeUsuario(nome)
      setRepositorios(retornoDaApi)
      setLoading(false)
    }
    CapturandoUsuario(nome)
    CapturandoRepositorios(nome)
  }, [])

  if (loading) {
    return (
        <div className="display-2 loading">Carregando...</div>
    )
  } else {
    return (
        <div>Usuario: {nome} </div>
    )
  }
}
