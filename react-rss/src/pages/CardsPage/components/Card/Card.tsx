import { FC } from 'react'

import { Character } from '../../hooks'

import styles from './Card.module.scss'

interface CardProps extends Character {
  getCharacter: (id: number) => Promise<void>
}

const Card: FC<CardProps> = ({ id, name, image, getCharacter }) => {
  return (
      <div
        className={styles.card}
        data-testid="card"
        onClick={() => getCharacter(id as number)}
      >
        <img
          src={image}
          alt={name}
          className={styles.image}
        />
        <div className={styles.title}>{name}</div>
      </div>
  )
}

export default Card
