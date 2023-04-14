import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import CardsPage from '../pages/CardsPage'
import { setupStore } from '../store/store'

describe('Page Cards', () => {
  const store = setupStore()

  test('must be rendered successfully', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardsPage />
        </BrowserRouter>
      </Provider>,
    )
  })

  test('fetch and display characters', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CardsPage />
        </BrowserRouter>
      </Provider>,
    )
    expect(
      await getByText('No cards found...'),
    ).toBeInTheDocument()
  })
})
