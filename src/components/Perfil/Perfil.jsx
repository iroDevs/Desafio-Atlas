/* eslint-disable react/prop-types */
import React from 'react'
import { AiFillStar, AiOutlineMail } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'

import './PerfilStyle.css'

function Perfil ({ dados }) {
  const usuario = {
    nome: dados.data.name,
    login: dados.data.login,
    seguidores: dados.data.followers,
    seguindo: dados.data.following,
    email: dados.data.email ? dados.data.email : 'não possui email principal cadastrado',
    foto: dados.data.avatar_url,
    descricao: dados.data.bio,
    twitter: dados.data.twitter_username ? dados.data.twitter_username : 'não possui twiter registrado',
    link: dados.data.html_url,
    estrelas: dados.data.public_gists
  }

  return (
    <div className=" perfil-container">
        <img src={usuario.foto} className="img-responsive foto-perfil"></img>
        <h3 className="nome-perfil">{usuario.nome}</h3>
        <h4 className="login-perfil">{usuario.login}</h4>
        <a className="btn-perfil btn btn-secondary " target="_blank" href={usuario.link} role="button" aria-disabled="true" rel="noreferrer">Follow</a>
        <p className="twitter-name">@{usuario.twitter}</p>
        <div className="container container-informacao-perfil">
        <p> <FiUsers /> {usuario.seguidores} followers : {usuario.seguindo} following : <AiFillStar /> {usuario.estrelas}</p>
        </div>
        <p> <AiOutlineMail /> {usuario.email}</p>
    </div>
  )
}
export default Perfil
