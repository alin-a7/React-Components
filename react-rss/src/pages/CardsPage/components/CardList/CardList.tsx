import { FC } from 'react'

import { useAppSelector } from '../../../../hooks/redux'
import Card from '../Card'

import styles from './CardList.module.scss'

interface CardListProps {
  getCharacter: (id: number) => Promise<void>
}

const CardList: FC<CardListProps> = ({  getCharacter }) => {
  const { loading, characters } = useAppSelector(
    (store) => store.characters,
  )

  return loading ? (
    <div className={styles.notFound}>Loading...</div>
  ) : characters?.length ? (
    <div className={styles.cardWrapper}>
      {characters.map((item) => (
        <Card key={item.id} {...item} getCharacter={getCharacter} />
      ))}
    </div>
  ) : (
    <div className={styles.notFound}>No cards found...</div>
  )
}

export default CardList
