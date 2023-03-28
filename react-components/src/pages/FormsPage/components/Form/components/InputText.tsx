import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import { FormState } from '../Form'

import styles from '../Form.module.scss'
import { nameValidation } from '../helpers'

interface InputTextProps {
  error: FieldError | undefined
  register: UseFormRegister<FormState>
}

const InputText: FC<InputTextProps> = ({ error, register }) => {
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
