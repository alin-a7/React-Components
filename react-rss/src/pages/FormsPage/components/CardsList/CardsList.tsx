import { FC } from 'react'

import { useAppSelector } from '../../../../hooks/redux'

import styles from './CardsList.module.scss'

const CardsList: FC = () => {
  const { formData } = useAppSelector((store) => store.form)
  
  return (
    <div className={styles.cardWrapper} data-testid="form-cards">
      {formData.map(({ text, date, language, gender, file }, index) => (
        <div key={index} className={styles.card} data-testid="form-card">
          <img className={styles.image} src={file} alt={text} />
          <div className={styles.name}>Name: {text}</div>
          <div>Birthday: {date}</div>
          <div>Language: {language}</div>
          <div>Gender: {gender}</div>
        </div>
      ))}
    </div>
  )
}

export default CardsList
