import { useAppSelector } from '../../hooks/redux'

import Layout from '../../components/Layout'
import { characterApi } from '../../services/CharacterService'

import InputSearch from './components/InputSearch'

import styles from './CardsPage.module.scss'
import CardList from './components/CardList'

const CardsPage = () => {
  const { name } = useAppSelector((store) => store.characters)

  const { error } = characterApi.useFetchAllCharactersQuery(name)

  return (
    <Layout>
      <InputSearch />

      {error ? (
        <div className={styles.notFound}>No cards found...</div>
      ) : (
        <CardList  />
      )}

      {/* {isVisible && (
        <Modal
          close={closeModal}
          content={<CardModal {...selectCharacter} close={closeModal} />}
        />
      )} */}
    </Layout>
  )
}

export default CardsPage
