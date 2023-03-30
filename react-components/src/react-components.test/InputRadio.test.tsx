import { render } from '@testing-library/react'
import Form from '../pages/FormsPage/components/Form'

describe('InputRadio component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed select value', () => {
    const { getByLabelText } = render(<Form setCardArray={() => null} />)
    const input = getByLabelText('male') as HTMLInputElement
    input.checked = true
    expect(input).toBeChecked()
  })
})
