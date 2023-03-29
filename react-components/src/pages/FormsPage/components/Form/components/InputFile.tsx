import { FC, FormEvent, useState } from 'react'

import { InputsProps } from './constant'

import styles from '../Form.module.scss'

const InputFile: FC<InputsProps> = ({ error, register }) => {
  const [value, setValue] = useState<string>('')

  const getImageName = (event: FormEvent) => {
    const files = (event.target as HTMLInputElement).files
    const file = files?.item(0) as File
    setValue(file.name)
  }

  return (
    <>
      <label data-testid="file" className={styles.fileInput}>
        <div className={styles.title}>Upload file: {value}</div>
        <input
          type="file"
          accept="image/*"
          {...register('file', {
            required: 'The field is required',
          })}
          className={styles.input}
          onInput={(event) => getImageName(event)}
        />
      </label>
      {error && <div className={styles.error}>{error.message}</div>}
    </>
  )
}

export default InputFile
