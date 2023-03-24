import React, { ChangeEvent, Component } from 'react'

import { FormState } from '../Form/Form'

import styles from './CardsList.module.scss'

interface CardsListProps {
  cardArray: FormState[]
}

class CardsList extends Component<CardsListProps> {
  render(): React.ReactNode {
    return (
      <div className={styles.cardWrapper}>
        {this.props.cardArray.map(
          ({ text, date, language, gender, file }, index) => (
            <div key={index} className={styles.card}>
              <img className={styles.image} src={file} />
              <div className={styles.name}>Name: {text}</div>
              <div>Birthday: {date}</div>
              <div>Language: {language}</div>
              <div>Gender: {gender}</div>
            </div>
          ),
        )}
      </div>
    )
  }
}

export default CardsList
