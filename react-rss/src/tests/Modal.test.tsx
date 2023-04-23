import { render } from '@testing-library/react'

import Modal from '../components/Modal'

describe('Modal component', () => {
  test('must be rendered successfully', () => {
    render(<Modal content={<div>Hello world</div>} close={() => null} />)
  })

  test('must be rendered children block correctly', () => {
    const { getByText } = render(
      <Modal content={<div>Hello world</div>} close={() => null} />,
    )
    const child = getByText('Hello world')
    expect(child).toBeInTheDocument()
  })
})
