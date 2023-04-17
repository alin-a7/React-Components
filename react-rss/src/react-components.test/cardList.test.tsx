import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import React from 'react'

import CardsList from '../pages/FormsPage/components/CardsList'
import Card from '../pages/CardsPage/components/Card'
import { setupStore } from '../store/store'

import { allCharacters } from '../constants/allCharacters'

describe('CardList', () => {
  const store = setupStore()

  it('render list on the CardsPage', () => {
    class CardList extends React.Component {
      render() {
        return allCharacters.map((item) => <Card key={item.id} {...item} />)
      }
    }
    render(
      <Provider store={store}>
        <CardList />
      </Provider>,
    )
    expect(screen.getAllByTestId('card').length).toEqual(2)
  })
  it('render list on the FormPage', () => {
    render(
      <Provider store={store}>
        <CardsList />
      </Provider>,
    )
    expect(screen.getByTestId('form-cards')).toBeInTheDocument()
  })
})
