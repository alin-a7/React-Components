import { render, fireEvent } from '@testing-library/react'

import InputSelect from '../pages/FormsPage/components/Form/components/InputSelect'
import { OPTIONS } from '../pages/FormsPage/components/Form/components/constant'

import InputSearch from '../components/InputSearch'

describe('InputSelect component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed select value', () => {
    const { getByTestId } = render(
      <InputSelect onChange={() => null} error={false}/>,
    )
    const input = getByTestId("select") as HTMLSelectElement
    fireEvent.change(input, { target: { value: OPTIONS[1].value } })
    expect(input.value).toBe(OPTIONS[1].value)
  })

  it('display an error message', () => {
    const { getByText } = render(
      <InputSelect onChange={() => null} error={true} />,
    )
    const error = getByText('The field is required')
    expect(error).toBeInTheDocument()
  })

})
