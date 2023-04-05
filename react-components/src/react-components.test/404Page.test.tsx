import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Page404 from '../pages/404Page'

describe('Page 404', () => {
  test('must be rendered successfully', () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>,
    )
    expect(screen.getByText('404 NOT FOUND')).toBeInTheDocument()
  })
})
