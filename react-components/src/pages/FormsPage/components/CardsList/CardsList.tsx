import React, { ChangeEvent, Component } from 'react'

import { FormState } from '../Form/Form'

import styles from './CardsList.module.scss'

interface CardsListProps {
  cardArray: FormState[]
}

class CardsList extends Component<CardsListProps> {
  render(): React.ReactNode {
    return (
      <div>
        {this.props.cardArray.map(({ name }, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
    )
  }
}

export default CardsList