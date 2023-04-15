import { FC } from 'react'

import { InputsProps } from './constant'

import styles from '../Form.module.scss'

const InputFile: FC<InputsProps> = ({ error, register }) => {
  return (
    <>
      <input
        type="file"
        accept="image/*"
        data-testid="file"
        {...register('file', {
          required: 'The field is required',
        })}
        className={styles.fileInput}
      />
      {error && <div className={styles.error}>{error.message}</div>}
    </>
  )
}

export default InputFile
