import { Dispatch, FC, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

import Modal from '../../../../components/Modal'
import { useModal } from '../../../../hooks/useModal'

import InputCheckbox from './components/InputCheckbox'
import InputSelect from './components/InputSelect'
import InputRadio from './components/InputRadio'
import InputDate from './components/InputDate'
import InputFile from './components/InputFile'
import InputText from './components/InputText'
import { getImage } from './utils'

import styles from './Form.module.scss'
import { useAppDispatch } from '../../../../hooks/redux'
import { formSlice } from '../../../../store/reducers/formSlice'

export interface FormState {
  text: string
  date: string
  language: string
  gender: string
  file: FileList
  agreement: boolean
}

const Form: FC = () => {
  const { isVisible, open: openModal, close: closeModal } = useModal()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    mode: 'onBlur',
  })

  const dispatch = useAppDispatch()
  const { addCard } = formSlice.actions

  const formSubmit = (data: FormState) => {
    const card = { ...data, file: getImage(data.file) }
    dispatch(addCard(card))
    openModal()
    reset()
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
      {isVisible && (
        <Modal
          close={closeModal}
          content={
            <div className={styles.succes}>Form completed successfully!</div>
          }
        />
      )}
    </form>
  )
}

export default Form
