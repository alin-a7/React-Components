import { render } from '@testing-library/react'
import Form from '../pages/FormsPage/components/Form'

describe('InputFile component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('display an error message', () => {
    const { getByTestId } = render(
      <Form setCardArray={() => null} />,
    )
    const input = getByTestId('file') as HTMLInputElement
    expect(input).toBeInTheDocument()
  })
})
