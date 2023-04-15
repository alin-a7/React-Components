import { FC } from 'react'

import { Character } from '../../hooks'
import Card from '../Card'

import styles from './CardList.module.scss'

interface CardListProps {
  allPerson: Character[]
  isLoading: boolean
  getCharacter: (id: number) => Promise<void>
}

const CardList: FC<CardListProps> = ({ allPerson, isLoading, getCharacter }) => {
  return isLoading ? (
    <div className={styles.notFound}>Loading...</div>
  ) : allPerson?.length ? (
    <div className={styles.cardWrapper}>
      {allPerson.map((item: Character) => (
        <Card key={item.id} {...item} getCharacter={getCharacter} />
      ))}
    </div>
  ) : (
    <div className={styles.notFound}>No cards found...</div>
  )
}

export default CardList
