import { useTypedSelector } from '../../hooks/useTypedSelector'

import Layout from '../../components/Layout'
import Modal from '../../components/Modal'

import { getSelectCharacterInfo, useCardsPage } from './hooks'
import InputSearch from './components/InputSearch'
import CardModal from './components/CardModal'

import styles from './CardsPage.module.scss'
import CardList from './components/CardList'
import { useAction } from '../../hooks/useAction'
import { useEffect } from 'react'

const CardsPage = () => {
  // const { error, isLoading, searchValue, searchCharacter, allPerson } =
  //   useCardsPage()

  const { isVisible, closeModal, selectCharacter, getCharacter } =
    getSelectCharacterInfo()

  const { loading, error, characters } = useTypedSelector(
    (store) => store.characters,
  )

  const { fetchCharacters } = useAction()

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <Layout>
      {/* <InputSearch value={searchValue} searchCharacter={searchCharacter} /> */}

      {error ? (
        <div className={styles.notFound}>{error}</div>
      ) : (
        <CardList
          allPerson={characters}
          isLoading={loading}
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
