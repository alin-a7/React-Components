import { FC } from 'react'

import { InputsProps } from './constant'

import styles from '../Form.module.scss'

const InputDate: FC<InputsProps> = ({ error, register }) => {
  return (
    <>
      <input
        {...register('date', {
          required: 'The field is required',
        })}
        type="date"
        className={styles.textInput}
      />
      {error && <div className={styles.error}>{error.message}</div>}
    </>
  )
}

export default InputDate
