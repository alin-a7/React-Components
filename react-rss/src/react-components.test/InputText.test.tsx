import { render, fireEvent } from '@testing-library/react'

import Form from '../pages/FormsPage/components/Form'

describe('InputText component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed input value', () => {
    const { getByPlaceholderText } = render(<Form setCardArray={() => null} />)
    const input = getByPlaceholderText(
      'Enter your first and last name',
    ) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'testValue' } })
    expect(input.value).toBe('testValue')
  })

})
