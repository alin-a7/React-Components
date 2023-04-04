import { FC } from 'react'

import { ReactComponent as CancelIcon } from '../../../../assets/cancel.svg'
import { errorImg } from '../../utils'
import { Person } from '../Card/Card'

import styles from './CardModal.module.scss'

interface CardModalProps extends Person {
  close: () => void
}

const CardModal: FC<CardModalProps> = ({
  name,
  image,
  species,
  gender,
  location,
  episode,
  close,
}) => {
  return (
    <div className={styles.card}>
      <CancelIcon className={styles.cancel} onClick={() => close()} />
      <img
        src={image}
        alt={name}
        className={styles.image}
        onError={(e) => errorImg(e)}
      />
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <div className={styles.infoItem}>Species: {species}</div>
        <div className={styles.infoItem}>Gender: {gender}</div>
        <div className={styles.infoItem}>Location: {location.name}</div>
        <div className={styles.infoItem}>
          Number of episodes: {episode.length}
        </div>
      </div>
    </div>
  )
}

export default CardModal
