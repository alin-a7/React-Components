import { render } from '@testing-library/react'

import InputRadio from '../pages/FormsPage/components/Form/components/InputRadio'

describe('InputRadio component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed select value', () => {
    const { getByLabelText } = render(
      <InputRadio onChange={() => null} error={false} value='male'/>,
    )
    const input = getByLabelText("male") as HTMLInputElement
    expect(input).toBeChecked()
  })

  it('display an error message', () => {
    const { getByText } = render(
      <InputRadio onChange={() => null} error={true} value='male'/>,
    )
    const error = getByText('The field is required')
    expect(error).toBeInTheDocument()
  })

})
