import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import CardsPage from '../pages/CardsPage'

describe('Page Cards', () => {
  test('must be rendered successfully', () => {
    render(
      <BrowserRouter>
        <CardsPage />
      </BrowserRouter>,
    )
  })

  test('fetch and display characters', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <CardsPage />
      </BrowserRouter>,
    )
    expect(await getByText('Download error, check your internet connection')).toBeInTheDocument()
  })
})
