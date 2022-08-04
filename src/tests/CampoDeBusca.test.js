/* eslint-disable no-undef */

import React from 'react'
import { screen, render } from '@testing-library/react'
import Pesquisa from '../pages/Pesquisa/Pesquisa'

describe('Teste da pagina de busca', () => {
  test('deve haver um titulo', () => {
    render(<Pesquisa />)
    const titulo = screen.getByText('Busque o usuario no github')
    expect(titulo).toBeInTheDocument()
  })

  test('deve haver input de texto', () => {
    render(<Pesquisa />)
    const input = screen.getByTestId('campo-pesquisa')
    expect(input).toBeInTheDocument()
  })
})
