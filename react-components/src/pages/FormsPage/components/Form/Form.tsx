import {
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from 'react'
import { useForm } from 'react-hook-form'

import InputText from './components/InputText'
import InputDate from './components/InputDate'
import InputCheckbox from './components/InputCheckbox'
import InputSelect from './components/InputSelect'
import InputRadio from './components/InputRadio'
import InputFile from './components/InputFile'

import styles from './Form.module.scss'

interface FormProps {
  setCardArray: Dispatch<SetStateAction<FormState[]>>
}

export interface FormState {
  text: string
  date: string
  language: string
  gender: string
  file: string
  agreement: boolean
}

const Form: FC<FormProps> = ({ setCardArray }) => {
  const [succes, setSucces] = useState<boolean>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: '',
      date: '',
      language: '',
      gender: '',
      file: '',
      agreement: false,
    },
    mode: 'onBlur'
  })

  const formSubmit = (data: FormState) => {
    setCardArray((prev) => [...prev, data])
    setSucces(true)
    setTimeout(() => setSucces(false), 2000)
  }

  // const uploadFile = (event: ChangeEvent<HTMLInputElement>)=> {
  //   const files = event.target.files
  //   const file = files?.item(0) as File
  //   this.setState({ file: URL.createObjectURL(file) })
  // }

  return (
    <form
      data-testid="form"
      onSubmit={handleSubmit(formSubmit)}
      className={styles.wrapper}
    >
      <InputText
        register={register}
        error={errors?.text}
      />
      <InputDate
        register={register}
        error={errors?.date}
      />
      {/*
        <InputSelect
          value={this.state.language}
          error={this.state.languageError}
          onChange={(event) => this.setState({ language: event.target.value })}
        /> */}
      {/* <InputRadio
          value={this.state.gender}
          error={this.state.genderError}
          onChange={(event) => this.setState({ gender: event.target.value })}
        /> */}
      {/* <InputFile
          value={this.state.file as string}
          error={this.state.fileError}
          onChange={this.uploadFile.bind(this)}
        /> */}
      {/* <InputCheckbox
          checked={this.state.agreement}
          error={this.state.agreementError}
          onChange={(event) =>
            this.setState({ agreement: event.target.checked })
          }
        /> */}
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
