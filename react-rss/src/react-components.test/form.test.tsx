import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import Form from '../pages/FormsPage/components/Form'
import { setupStore } from '../store/store'

describe('Form component', () => {
  const store = setupStore()

  it('must be rendered successfully', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>,
    )
  })

  it('must be rendered form correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    )
    const form = getByTestId('form')
    expect(form).toBeInTheDocument()
  })
})
