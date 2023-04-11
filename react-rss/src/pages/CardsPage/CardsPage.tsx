import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchCharacters } from '../../store/action-creators/characters'

import Layout from '../../components/Layout'
import Modal from '../../components/Modal'

import { getSelectCharacterInfo } from './hooks'
import InputSearch from './components/InputSearch'
import CardModal from './components/CardModal'

import styles from './CardsPage.module.scss'
import CardList from './components/CardList'

const CardsPage = () => {
  const { isVisible, closeModal, selectCharacter, getCharacter } =
    getSelectCharacterInfo()

  const { error, name } = useAppSelector((store) => store.characters)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCharacters(name))
  }, [name])

  return (
    <Layout>
      <InputSearch />

      {error ? (
        <div className={styles.notFound}>{error}</div>
      ) : (
        <CardList getCharacter={getCharacter} />
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
