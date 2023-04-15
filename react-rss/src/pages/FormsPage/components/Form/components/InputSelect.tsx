import { FC } from 'react'

import { InputsProps, OPTIONS } from './constant'

import styles from '../Form.module.scss'

const InputSelect: FC<InputsProps> = ({ error, register }) => {
  return (
    <>
      <label className={styles.selectInput}>
        Select a language:
        <select
          data-testid="select"
          className={styles.selectItems}
          {...register('language', {
            required: 'The field is required',
          })}
        >
          {OPTIONS.map(({ value, label }, index) => (
            <option key={index} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      {error && <div className={styles.error}>{error.message}</div>}
    </>
  )
}

export default InputSelect
