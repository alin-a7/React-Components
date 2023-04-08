import { FC } from 'react'

import { InputsProps } from './constant'

import styles from '../Form.module.scss'

const InputCheckbox: FC<InputsProps> = ({ error, register }) => {
  return (
    <>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          data-testid="checkbox"
          {...register('agreement', {
            required: 'The field is required',
          })}
        />
        <span>I consent to my personal data</span>
      </label>
      {error && <div className={styles.error}>{error.message}</div>}
    </>
  )
}

export default InputCheckbox
