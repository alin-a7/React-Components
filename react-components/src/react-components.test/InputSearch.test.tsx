import { render, fireEvent } from '@testing-library/react'

import InputSearch from '../pages/CardsPage/components/InputSearch'

describe('InputSearch component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed input value', () => {
    const { getByPlaceholderText } = render(
      <InputSearch onChange={() => null} />,
    )
    const input = getByPlaceholderText('Search products!') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'testValue' } })
    expect(input.value).toBe('testValue')
  })
})
