import { render } from '@testing-library/react'
import Card from './Card'

describe('Card component', () => {
  const testProps = {
    image: 'https://example.com/image.jpg',
    title: 'Example title',
    description: 'Example description',
    price: 11,
    category: 'category',
    id: 1,
    rating: { rate: 125, count: 220 },
  }

  it('must be rendered successfully', () => {
    render(<Card {...testProps} />)
  })

  it('must be rendered image correctly', () => {
    const { getByAltText } = render(<Card {...testProps} />)
    const image = getByAltText('Example title')
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  test('must be rendered rating correctly', () => {
    const { getByText } = render(<Card {...testProps} />)
    const rate = getByText('Rate: 125')
    const count = getByText('Count: 220')
    expect(rate).toBeInTheDocument()
    expect(count).toBeInTheDocument()
  })

  test('must be rendered price correctly', () => {
    const { getByText } = render(<Card {...testProps} />)
    const price = getByText('11$')
    expect(price).toBeInTheDocument()
  })
})
