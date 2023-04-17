import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import CardsPage from '../pages/CardsPage'

describe('Renders main page correctly', () => {
  it('Should render the page correctly', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/cards" element={<CardsPage/>} />
        </Routes>
      </BrowserRouter>,
    )
    const cardsLink = screen.queryByText('Current page: not found')
    expect(cardsLink).toBeNull()
  })
})
