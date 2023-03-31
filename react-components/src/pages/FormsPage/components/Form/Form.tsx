import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ICard } from '../../FormsPage'

import InputCheckbox from './components/InputCheckbox'
import InputSelect from './components/InputSelect'
import InputRadio from './components/InputRadio'
import InputDate from './components/InputDate'
import InputFile from './components/InputFile'
import InputText from './components/InputText'
import { getImage } from './utils'

import styles from './Form.module.scss'

interface FormProps {
  setCardArray: Dispatch<SetStateAction<ICard[]>>
}

export interface FormState {
  text: string
  date: string
  language: string
  gender: string
  file: FileList
  agreement: boolean
}

const Form: FC<FormProps> = ({ setCardArray }) => {
  const [succes, setSucces] = useState<boolean>()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    mode: 'onBlur',
  })

  const formSubmit = (data: FormState) => {
    const card = { ...data, file: getImage(data.file) }
    setCardArray((prev) => [...prev, card])
    setSucces(true)
    reset()
    setTimeout(() => setSucces(false), 2000)
  }

  return (
    <form
      data-testid="form"
      onSubmit={handleSubmit(formSubmit)}
      className={styles.wrapper}
    >
      <InputText register={register} error={errors?.text} />
      <InputDate register={register} error={errors?.date} />
      <InputSelect register={register} error={errors?.language} />
      <InputRadio register={register} error={errors?.gender} />
      <InputFile register={register} error={errors?.file} />
      <InputCheckbox register={register} error={errors?.agreement} />

      <button type="submit" className={styles.button}>
        Create card!
      </button>
      {succes && (
        <div className={styles.succes}>Form completed successfully!</div>
      )}
    </form>
  )
}

export default Form
