import { fireEvent, render } from '@testing-library/react'

import Form from '../pages/FormsPage/components/Form/Form'

describe('InputSelect component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed select value', () => {
    const { getByTestId } = render(<Form setCardArray={() => null} />)
    const input = getByTestId("checkbox") as HTMLInputElement
    input.checked = true
    expect(input).toBeChecked()
  })

})
