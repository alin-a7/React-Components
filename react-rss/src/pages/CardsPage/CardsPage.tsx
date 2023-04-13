import { useAppSelector } from '../../hooks/redux'

import Layout from '../../components/Layout'
import { characterApi } from '../../services/CharacterService'

import InputSearch from './components/InputSearch'
import CardList from './components/CardList'

import styles from './CardsPage.module.scss'

const CardsPage = () => {
  const { characterName } = useAppSelector((store) => store.characters)

  const { error } = characterApi.useFetchAllCharactersQuery(characterName)

  return (
    <Layout>
      <InputSearch />
      {error ? (
        <div className={styles.notFound}>No cards found...</div>
      ) : (
        <CardList />
      )}
    </Layout>
  )
}

export default CardsPage
