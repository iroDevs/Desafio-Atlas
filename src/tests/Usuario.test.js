/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import Pesquisa from '../pages/Pesquisa/Pesquisa'
import Api from '../api/GitHubApi'
import Usuario from '../pages/Usuario/Usuario'
import mock from './Mock/MockApiGitHub'
import { BrowserRouter as Router } from 'react-router-dom'
import renderComRouter from './renderComRouter'

describe('Teste da pagina de usuario', () => {
  beforeEach(() => {
    jest.spyOn(Api, 'PegueUmUsuarioPeloNome').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock.usuarioMock)
    })

    jest.spyOn(Api, 'PegueRepositoriosPeloNomeDeUsuario').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock.repositoriosMock)
    })
    render(
      <Router>
        <Usuario />
      </Router>)
  })

  test('deve haver um usuario', () => {
    setTimeout(beforeLoading, 5000)

    function beforeLoading () {
      const titulo = screen.getByText('PedroDev')
      expect(titulo).toBeInTheDocument()
    }

    // lista-de-repositorios
  })

  test('deve haver uma lista de repositorio', () => {
    setTimeout(beforeLoading, 5000)

    function beforeLoading () {
      const lista = screen.getByTestId('lista-de-repositorios')
      expect(lista).toBeInTheDocument()
    }

    // lista-de-repositorios
  })
})
