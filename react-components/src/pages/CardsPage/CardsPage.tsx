import Layout from '../../components/Layout'
import Modal from '../../components/Modal'

import { getSelectCharacterInfo, useCardsPage } from './hooks'
import InputSearch from './components/InputSearch'
import CardModal from './components/CardModal'

import styles from './CardsPage.module.scss'
import CardList from './components/CardList'

const CardsPage = () => {
  const { error, isLoading, searchValue, searchCharacter, allPerson } =
    useCardsPage()

  const { isVisible, closeModal, selectCharacter, getCharacter } =
    getSelectCharacterInfo()

  return (
    <Layout>
      <InputSearch value={searchValue} searchCharacter={searchCharacter} />

      {error ? (
        <div className={styles.notFound}>
          Download error, check your internet connection
        </div>
      ) : (
        <CardList
          allPerson={allPerson}
          isLoading={isLoading}
          getCharacter={getCharacter}
        />
      )}

      {isVisible && (
        <Modal
          close={closeModal}
          content={<CardModal {...selectCharacter} close={closeModal} />}
        />
      )}
    </Layout>
  )
}

export default CardsPage
