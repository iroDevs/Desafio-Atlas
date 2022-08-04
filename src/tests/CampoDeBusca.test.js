/* eslint-disable no-undef */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Pesquisa from '../pages/Pesquisa/Pesquisa'

test('deve haver um titulo', () => {
  render(<Pesquisa />)
  const titulo = screen.getByText('Busque o usuario no github')
  expect(titulo).toBeInTheDocument()
})
