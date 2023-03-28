import { FC } from 'react'

import { nameValidation } from '../helpers'
import { InputsProps } from './constant'

import styles from '../Form.module.scss'

const InputText: FC<InputsProps> = ({ error, register }) => {
  return (
    <>
      <input
        {...register('text', {
          required: 'The field is required',
          validate: (value) =>
            nameValidation(value) ||
            'The name must consist of 2 words and begin with a capital letter',
        })}
        type="text"
        className={styles.textInput}
        placeholder="Enter your first and last name"
      />
      {error && <div className={styles.error}>{error.message}</div>}
    </>
  )
}

export default InputText
