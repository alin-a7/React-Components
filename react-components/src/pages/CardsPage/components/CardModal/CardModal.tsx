import { FC } from 'react'

import { Person } from '../Card/Card'

import styles from './CardModal.module.scss'

const CardModal: FC<Person> = ({
  name,
  image,
  species,
  gender,
  location,
  episode,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
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
