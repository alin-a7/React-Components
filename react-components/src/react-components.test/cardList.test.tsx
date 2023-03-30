import { render, screen } from '@testing-library/react'
import React from 'react'

import Card from '../pages/CardsPage/components/Card'

import { allProducts } from '../constants/allProducts'

describe('CardList', () => {
  it('render list', () => {
    class CardList extends React.Component {
      render() {
        return allProducts.map((item) => <Card key={item.id} {...item} />)
      }
    }
    render(<CardList />)
    expect(screen.getAllByTestId('card').length).toEqual(20)
  })
})
