import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import FormsPage from '../pages/FormsPage'
import { setupStore } from '../store/store'

describe('Page About', () => {
  test('must be rendered successfully', () => {
    const store = setupStore()

    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <FormsPage />
        </BrowserRouter>
      </Provider>,
    )
    expect(getByText('Select a language:')).toBeInTheDocument()
  })
})
