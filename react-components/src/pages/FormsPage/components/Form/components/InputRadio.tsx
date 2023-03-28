import { Component, FC } from 'react'

import { InputsProps } from './constant'

import styles from '../Form.module.scss'

const InputRadio: FC<InputsProps> = ({ error, register }) => {
  return (
    <>
      <label className={styles.selectInput}>
        Select a gender:
        <InputRadioItem itemValue="male" register={register} />
        <InputRadioItem itemValue="female" register={register} />
      </label>
      {error && <div className={styles.error}>The field is required</div>}
    </>
  )
}

interface InputRadioItemProps extends InputsProps {
  itemValue: string
}

const InputRadioItem: FC<InputRadioItemProps> = ({ itemValue, register }) => {
  return (
    <label className={styles.radioLabel}>
      {itemValue}
      <input
        type="radio"
        value={itemValue}
        {...register('gender', {
          required: 'The field is required',
        })}
      />
    </label>
  )
}

export default InputRadio
