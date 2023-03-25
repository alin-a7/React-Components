import { render, fireEvent } from '@testing-library/react'

import InputCheckbox from '../pages/FormsPage/components/Form/components/InputCheckbox'

import InputSearch from '../components/InputSearch'

describe('InputSelect component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed select value', () => {
    const { getByTestId } = render(
      <InputCheckbox onChange={() => null} error={false} checked={true}/>,
    )
    const input = getByTestId("checkbox") as HTMLInputElement
    expect(input).toBeChecked()
  })

  it('display an error message', () => {
    const { getByText } = render(
      <InputCheckbox onChange={() => null} error={true} />,
    )
    const error = getByText('The field is required')
    expect(error).toBeInTheDocument()
  })

})
