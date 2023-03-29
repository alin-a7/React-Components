import { FC } from 'react'

import { FormState } from '../Form/Form'

import styles from './CardsList.module.scss'

interface CardsListProps {
  cardArray: FormState[]
}

const CardsList: FC<CardsListProps> = ({cardArray}) => {

  const getImage = (files: FileList) => {
    const file = files?.item(0) as File
    return URL.createObjectURL(file)
  }

  return (
    <div className={styles.cardWrapper}>
      {cardArray.map(
        ({ text, date, language, gender, file }, index) => (
          <div key={index} className={styles.card}>
            <img className={styles.image} src={getImage(file)} alt={text}/>
            <div className={styles.name}>Name: {text}</div>
            <div>Birthday: {date}</div>
            <div>Language: {language}</div>
            <div>Gender: {gender}</div>
          </div>
        ),
      )}
    </div>
  )
}

export default CardsList
