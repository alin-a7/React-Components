import { render, fireEvent } from '@testing-library/react'
import InputTextAndDate from '../pages/FormsPage/components/Form/components/InputText'

describe('InputText component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed input value', () => {
    const { getByPlaceholderText } = render(
      <InputTextAndDate onChange={() => null} error={false} type="text" />,
    )
    const input = getByPlaceholderText(
      'Enter your first and last name',
    ) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'testValue' } })
    expect(input.value).toBe('testValue')
  })

  it('display an error message', () => {
    const { getByText } = render(
      <InputTextAndDate onChange={() => null} error={true} type="date" />,
    )
    const error = getByText('The field is required')
    expect(error).toBeInTheDocument()
  })
  it('display an error message', () => {
    const { getByText } = render(
      <InputTextAndDate onChange={() => null} error={true} type="text" />,
    )
    const error = getByText('The name must consist of 2 words and begin with a capital letter')
    expect(error).toBeInTheDocument()
  })
})
