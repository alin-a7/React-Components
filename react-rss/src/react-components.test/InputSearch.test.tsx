import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'

import InputSearch from '../pages/CardsPage/components/InputSearch'
import { setupStore } from '../store/store'

describe('InputSearch component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed input value', () => {
    const store = setupStore()

    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <InputSearch />
      </Provider>,
    )
    const input = getByPlaceholderText('Search characters!') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'testValue' } })
    expect(input.value).toBe('testValue')
  })
})
