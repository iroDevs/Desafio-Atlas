import React from 'react'
import { useParams } from 'react-router-dom'
export default function Usuario () {
  const usuario = useParams()
  return (
    <div>Usuario: {usuario.nome} </div>
  )
}
