import { FC } from 'react'

import { characterApi } from '../../../../services/CharacterService'
import { Character } from '../../../../store/types/characterTypes'
import { useModal } from '../../../../hooks/useModal'
import Modal from '../../../../components/Modal'
import CardModal from '../CardModal'

import styles from './Card.module.scss'

const Card: FC<Character> = ({ id, name, image }) => {
  const { isVisible, open: openModal, close: closeModal } = useModal()

  const { data: selectCharacter } =
    characterApi.useFetchSelectCharacterQuery(id)

  return (
    <>
      <div className={styles.card} data-testid="card" onClick={openModal}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.title}>{name}</div>
      </div>
      {isVisible && (
        <Modal
          close={closeModal}
          content={
            <CardModal {...(selectCharacter as Character)} close={closeModal} />
          }
        />
      )}
    </>
  )
}

export default Card
