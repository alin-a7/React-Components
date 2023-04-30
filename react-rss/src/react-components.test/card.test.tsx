import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import CardModal from '../pages/CardsPage/components/CardModal'
import Card from '../pages/CardsPage/components/Card/Card'
import { setupStore } from '../store/store'

describe('Card component', () => {
  const store = setupStore()

  const testProps = {
    id: 1,
    image: 'https://example.com/image.jpg',
    name: 'Example name',
    species: 'Example species',
    gender: 'male',
    episode: [' ', ' '],
    location: { name: 'Example location' },
  }

  test('must be rendered successfully', () => {
    render(
      <Provider store={store}>
        <Card {...testProps} />
      </Provider>,
    )
  })

  test('must be rendered image correctly', () => {
    const { getByAltText } = render(
      <Provider store={store}>
        <Card {...testProps} />
      </Provider>,
    )
    const image = getByAltText('Example name')
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  test('must be rendered image correctly', () => {
    const { getByAltText } = render(
      <CardModal close={() => null} {...testProps} />,
    )
    const image = getByAltText('Example name')
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg')
  })
})
