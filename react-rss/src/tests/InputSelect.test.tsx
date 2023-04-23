import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import { OPTIONS } from '../pages/FormsPage/components/Form/components/constant'
import Form from '../pages/FormsPage/components/Form'
import { setupStore } from '../store/store'

describe('InputSelect component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed select value', () => {
    const store = setupStore()

    const { getByTestId } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    )
    const input = getByTestId('select') as HTMLSelectElement
    fireEvent.change(input, { target: { value: OPTIONS[1].value } })
    expect(input.value).toBe(OPTIONS[1].value)
  })
})
