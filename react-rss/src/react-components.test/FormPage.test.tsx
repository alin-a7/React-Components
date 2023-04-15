import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import FormsPage from '../pages/FormsPage'

describe('Page About', () => {
  test('must be rendered successfully', () => {
    const { getByText } = render(
      <BrowserRouter>
        <FormsPage />
      </BrowserRouter>,
    )
    expect(getByText('Select a language:')).toBeInTheDocument()
  })
})
