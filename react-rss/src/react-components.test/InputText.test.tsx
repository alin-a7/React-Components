import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import Form from '../pages/FormsPage/components/Form'
import { setupStore } from '../store/store'

describe('InputText component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed input value', () => {
    const store = setupStore()

    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    )
    const input = getByPlaceholderText(
      'Enter your first and last name',
    ) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'testValue' } })
    expect(input.value).toBe('testValue')
  })
})
