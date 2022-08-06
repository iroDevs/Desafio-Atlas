/* eslint-disable no-undef */

import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Pesquisa from '../pages/Pesquisa/Pesquisa'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Teste da pagina de busca', () => {
  test('deve haver um titulo', () => {
    render(
    <Router>
      <Pesquisa />
    </Router>
    )
    const titulo = screen.getByText('Busque o usuario no github')
    expect(titulo).toBeInTheDocument()
  })

  test('deve haver input de texto', () => {
    render(
      <Router>
        <Pesquisa />
      </Router>
    )
    const input = screen.getByTestId('campo-pesquisa')
    expect(input).toBeInTheDocument()
  })

  test('Ao clicar no botão com o campo vazio um alerta devera ser exibido', () => {
    render(
      <Router>
        <Pesquisa />
      </Router>
    )
    const alertaTexto = 'informe um nome de usuário válido do github'
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const alert = screen.getByText(alertaTexto)
    expect(alert).toBeInTheDocument()
  })
})
