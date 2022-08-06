/* eslint-disable react/prop-types */
import React from 'react'
import { BiBookBookmark } from 'react-icons/bi'
import Repositorio from '../Repositorio/Repositorio'
import './ListaRepositoriosStyle.css'

export default function ListaRepositorios ({ dados, quantidade }) {
  return (
    <div className="lista-container">
        <div> <BiBookBookmark /> Repositorios {quantidade}<hr className="linha" /></div>
    <div className="lista-repositorios">
        {
            dados.map((value, key) => {
              return (
                    <Repositorio elemento={value} key={key} />
              )
            })
        }
    </div>
    </div>
  )
}
