import { render } from '@testing-library/react'

import Form from '../pages/FormsPage/components/Form'

describe('Form component', () => {
  it('must be rendered successfully', () => {
    render(<Form setCardArray={() => null} />)
  })

  it('must be rendered form correctly', () => {
    const { getByTestId } = render(<Form setCardArray={() => null} />)
    const form = getByTestId('form')
    expect(form).toBeInTheDocument()
  })
})
