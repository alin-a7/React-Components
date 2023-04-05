import { render } from '@testing-library/react'

import CardModal from '../pages/CardsPage/components/CardModal'
import Card from '../pages/CardsPage/components/Card/Card'

describe('Card component', () => {
  const testProps = {
    image: 'https://example.com/image.jpg',
    name: 'Example name',
    species: 'Example species',
    gender: 'male',
    episode: [' ', ' '],
    location: { name: 'Example location' },
  }

  test('must be rendered successfully', () => {
    render(<Card {...testProps} />)
  })

  test('must be rendered image correctly', () => {
    const { getByAltText } = render(<Card {...testProps} />)
    const image = getByAltText('Example name')
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  test('must be rendered image correctly', () => {
    const { getByAltText } = render(<CardModal close={()=>null} {...testProps} />)
    const image = getByAltText('Example name')
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg')
  })
})
