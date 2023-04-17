import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import Form from '../pages/FormsPage/components/Form'
import { setupStore } from '../store/store'

describe('InputFile component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('display an error message', () => {
    const store = setupStore()

    const { getByTestId } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    )
    const input = getByTestId('file') as HTMLInputElement
    expect(input).toBeInTheDocument()
  })
})
