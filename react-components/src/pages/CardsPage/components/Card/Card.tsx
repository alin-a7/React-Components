import { FC } from 'react'

import { useModal } from '../../../../hooks'
import Modal from '../../../../components/Modal'

import CardModal from '../CardModal'

import styles from './Card.module.scss'

export interface Person {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

const Card: FC<Person> = (person) => {
  const { open, close, isVisible } = useModal()

  const { name, image } = person

  return (
    <>
      {isVisible && <Modal close={close} content={<CardModal {...person}/>} />}

      <div className={styles.card} data-testid="card" onClick={() => open()}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.title}>{name}</div>
      </div>
    </>
  )
}

export default Card
