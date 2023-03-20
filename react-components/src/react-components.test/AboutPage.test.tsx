import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import AboutPage from '../pages/AboutPage'

describe('Page About', () => {
  test('must be rendered successfully', () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>,
    )
    expect(getAllByText('About')[0]).toBeInTheDocument()
  })
})
