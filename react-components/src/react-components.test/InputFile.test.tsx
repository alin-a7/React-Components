import { render } from '@testing-library/react'

import InputFile from '../pages/FormsPage/components/Form/components/InputFile'

describe('InputFile component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('display an error message', () => {
    const { getByText } = render(
      <InputFile onChange={() => null} error={true} />,
    )
    const error = getByText('The field is required')
    expect(error).toBeInTheDocument()
  })
})
