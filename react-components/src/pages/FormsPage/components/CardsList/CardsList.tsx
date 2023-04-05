import React, { Component } from 'react'

import { ICard } from '../../FormsPage'

import styles from './CardsList.module.scss'

interface CardsListProps {
  cardArray: ICard[]
}

class CardsList extends Component<CardsListProps> {
  render(): React.ReactNode {
    return (
      <div className={styles.cardWrapper}>
        {this.props.cardArray.map(
          ({ text, date, language, gender, file }, index) => (
            <div key={index} className={styles.card}>
              <img className={styles.image} src={file} alt={text}/>
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
