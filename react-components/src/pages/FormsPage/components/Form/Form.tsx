import React, {
  Component,
  createRef,
  FormEvent,
  RefObject,
} from 'react'

import { ICard } from '../../FormsPage'

import InputTextAndDate from './components/InputTextAndDate'
import InputCheckbox from './components/InputCheckbox'
import InputSelect from './components/InputSelect'
import InputRadio from './components/InputRadio'
import InputFile from './components/InputFile'
import { nameValidation } from './helpers'

import styles from './Form.module.scss'

interface FormProps {
  createCard: (card: ICard) => void
}

export interface FormState {
  gender: string
  textError: boolean
  dateError: boolean
  languageError: boolean
  genderError: boolean
  fileError: boolean
  succes: boolean
  agreementError: boolean
}

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props)
    this.state = {
      gender: '',
      textError: false,
      dateError: false,
      languageError: false,
      genderError: false,
      fileError: false,
      agreementError: false,
      succes: false,
    }
    this.inputsRefs = {
      form: createRef(),
      name: createRef(),
      date: createRef(),
      language: createRef(),
      gender: createRef(),
      file: createRef(),
      agreement: createRef(),
    }
    this.formSubmit = this.formSubmit.bind(this)
  }
  inputsRefs: {
    form: RefObject<HTMLFormElement>
    name: RefObject<HTMLInputElement>
    date: RefObject<HTMLInputElement>
    language: RefObject<HTMLSelectElement>
    gender: RefObject<HTMLInputElement>
    file: RefObject<HTMLInputElement>
    agreement: RefObject<HTMLInputElement>
  }

  formSubmit(event: FormEvent<HTMLFormElement | HTMLButtonElement>) {
    event.preventDefault()
    const card: ICard = {
      text: this.inputsRefs.name?.current?.value as string,
      date: this.inputsRefs.date?.current?.value as string,
      language: this.inputsRefs.language?.current?.value as string,
      gender: this.inputsRefs.gender?.current?.checked ? 'male' : 'female',
      file: this.uploadFile(this.inputsRefs.file?.current?.files as FileList),
    }
    const textError = !nameValidation(card.text)
    const dateError = !card.date
    const languageError = !card.language
    const genderError = !card.gender
    const fileError = !card.file
    const agreementError = !this.inputsRefs.agreement?.current
      ?.checked as boolean
    this.setState({
      textError: textError,
      dateError: dateError,
      languageError: languageError,
      genderError: genderError,
      fileError: fileError,
      agreementError: agreementError,
    })
    if (
      !textError &&
      !dateError &&
      !languageError &&
      !genderError &&
      !fileError &&
      !agreementError
    ) {
      this.props.createCard(card)
      this.setState({ succes: true, gender: '' })
      setTimeout(() => this.setState({ succes: false }), 2000)
      this.inputsRefs.form.current?.reset()
    }
  }

  uploadFile(img: FileList) {
    const file = img?.item(0) as File
    if (!file) {
      this.setState({ fileError: true })
      return ''
    }
    return URL.createObjectURL(file)
  }

  render(): React.ReactNode {
    return (
      <form
        ref={this.inputsRefs.form}
        data-testid="form"
        onSubmit={this.formSubmit}
        className={styles.wrapper}
      >
        <InputTextAndDate
          type="text"
          refs={this.inputsRefs.name}
          error={this.state.textError}
        />
        <InputTextAndDate
          type="date"
          refs={this.inputsRefs.date}
          error={this.state.dateError}
        />
        <InputSelect
          refs={this.inputsRefs.language}
          error={this.state.languageError}
        />
        <InputRadio
          refs={this.inputsRefs.gender}
          value={this.state.gender}
          error={this.state.genderError}
          onChange={(event) => this.setState({ gender: event.target.value })}
        />
        <InputFile
          refs={this.inputsRefs.file}
          error={this.state.fileError}
        />
        <InputCheckbox
          refs={this.inputsRefs.agreement}
          error={this.state.agreementError}
        />
        <button className={styles.button} onSubmit={this.formSubmit}>
          Create card!
        </button>
        {this.state.succes && (
          <div className={styles.succes}>Form completed successfully!</div>
        )}
      </form>
    )
  }
}

export default Form
