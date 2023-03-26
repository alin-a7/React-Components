import { fireEvent, render } from '@testing-library/react'

import InputCheckbox from '../pages/FormsPage/components/Form/components/InputCheckbox'

describe('InputSelect component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed select value', () => {
    const { getByTestId } = render(
      <InputCheckbox error={false} />,
    )
    const input = getByTestId("checkbox") as HTMLInputElement
    fireEvent.change(input, { target: { checked: true } })
    expect(input).toBeChecked()
  })

  it('display an error message', () => {
    const { getByText } = render(
      <InputCheckbox error={true} />,
    )
    const error = getByText('The field is required')
    expect(error).toBeInTheDocument()
  })

})
