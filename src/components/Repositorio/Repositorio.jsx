/* eslint-disable react/prop-types */
import React from 'react'
import './RepositorioStyle.css'
export default function Repositorio ({ elemento }) {
  const repositorio = {
    nome: elemento.name,
    linguagem: elemento.language,
    forks: elemento.forks_count,
    vistos: elemento.watchers_count,
    url: elemento.html_url,
    ultimaAtualização: elemento.pushed_at
  }

  return (
    <div>
        <a className="nome-repositorio" target="_blank" href={repositorio.url} rel="noreferrer">{repositorio.nome}</a>
        <div className="info-projeto">{repositorio.linguagem}  forks: {repositorio.forks} visitados: {repositorio.vistos}  Ultimo Acesso: {repositorio.ultimaAtualização}</div>

        <hr></hr>
    </div>
  )
}
