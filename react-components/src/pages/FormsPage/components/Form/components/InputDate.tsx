import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import { FormState } from '../Form'

import styles from '../Form.module.scss'
import { nameValidation } from '../helpers'

interface InputDateProps {
  error: FieldError | undefined
  register: UseFormRegister<FormState>
}

const InputDate: FC<InputDateProps> = ({ error, register }) => {
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
