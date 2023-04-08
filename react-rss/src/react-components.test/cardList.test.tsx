import { render, screen } from '@testing-library/react'
import React from 'react'

import CardsList from '../pages/FormsPage/components/CardsList'
import Card from '../pages/CardsPage/components/Card'

import { allCharacters } from '../constants/allCharacters'

describe('CardList', () => {
  it('render list on the CardsPage', () => {
    class CardList extends React.Component {
      render() {
        return allCharacters.map((item) => (
          <Card
            key={item.id}
            {...item}
            // eslint-disable-next-line
            getCharacter={() => new Promise((_) => null)}
          />
        ))
      }
    }
    render(<CardList />)
    expect(screen.getAllByTestId('card').length).toEqual(2)
  })
  it('render list on the FormPage', () => {
    const cardArray = [
      {
        text: 'text',
        date: 'date',
        language: 'ru',
        gender: 'male',
        file: 'img',
        agreement: true,
      },
      {
        text: 'text',
        date: 'date',
        language: 'ru',
        gender: 'male',
        file: 'img',
        agreement: true,
      },
    ]
    render(<CardsList cardArray={cardArray} />)
    expect(screen.getAllByTestId('form-card').length).toEqual(2)
  })
})
