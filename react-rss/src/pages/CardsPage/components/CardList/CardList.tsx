import { FC } from 'react'

import { useAppSelector } from '../../../../hooks/redux'
import Card from '../Card'

import styles from './CardList.module.scss'
import { characterApi } from '../../../../services/CharacterService'

const CardList: FC = () => {
  const { name } = useAppSelector((store) => store.characters)

  const { isLoading, data } = characterApi.useFetchAllCharactersQuery(name)
  const characters = data?.results

  return isLoading ? (
    <div className={styles.notFound}>Loading...</div>
  ) : characters?.length ? (
    <div className={styles.cardWrapper}>
      {characters.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  ) : (
    <div className={styles.notFound}>No cards found...</div>
  )
}

export default CardList
