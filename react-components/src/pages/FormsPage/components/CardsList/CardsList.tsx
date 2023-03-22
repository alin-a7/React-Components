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
        {this.props.cardArray.map(({ text, date, language }, index) => (
          <div key={index}>{text} {date} {language}</div>
        ))}
      </div>
    )
  }
}

export default CardsList
