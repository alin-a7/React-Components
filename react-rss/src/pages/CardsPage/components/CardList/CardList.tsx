import { FC } from 'react'

import { useFetchAllCharactersQuery } from '@/store/services/CharacterService'
import { useAppSelector } from '../../../../hooks/redux'
import Card from '../Card'

import styles from './CardList.module.scss'

const CardList: FC = () => {
  const { characterName } = useAppSelector((store) => store.characters)

  const { isFetching, error, data } = useFetchAllCharactersQuery(characterName)
  const characters = data?.results

  return isFetching ? (
    <div className={styles.notFound}>Loading...</div>
  ) : !error ? (
    <div className={styles.cardWrapper}>
      {characters?.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  ) : (
    <div className={styles.notFound}>No cards found...</div>
  )
}

export default CardList
