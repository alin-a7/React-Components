import React, { ChangeEvent, Component, FormEvent } from 'react'

import InputTextAndDate from './components/InputTextAndDate'
import InputCheckbox from './components/InputCheckbox'
import InputSelect from './components/InputSelect'
import InputRadio from './components/InputRadio'
import InputFile from './components/InputFile'
import { nameValidation } from './helpers'

import styles from './Form.module.scss'

interface FormProps {
  createCard: (card: FormState) => void
}

export interface FormState {
  text: string
  date: string
  language: string
  gender: string
  file: string
  agreement: boolean
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
      text: '',
      date: '',
      language: '',
      gender: '',
      file: '',
      agreement: false,
      textError: false,
      dateError: false,
      languageError: false,
      genderError: false,
      fileError: false,
      agreementError: false,
      succes: false,
    }
    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit(event: FormEvent<HTMLFormElement | HTMLButtonElement>) {
    event.preventDefault()
    const textError = !nameValidation(this.state.text)
    const dateError = !this.state.date
    const languageError = !this.state.language
    const genderError = !this.state.gender
    const fileError = !this.state.file
    const agreementError = !this.state.agreement
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
      this.props.createCard(this.state)
      this.setState({
        text: '',
        date: '',
        language: '',
        gender: '',
        file: '',
        agreement: false,
        succes: true,
      })
      setTimeout(() => this.setState({ succes: false }), 2000)
    }
  }

  uploadFile(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    const file = files?.item(0) as File
    this.setState({ file: URL.createObjectURL(file) })
  }

  render(): React.ReactNode {
    return (
      <form onSubmit={this.formSubmit} className={styles.wrapper}>
        <InputTextAndDate
          type="text"
          value={this.state.text}
          error={this.state.textError}
          onChange={(event) => this.setState({ text: event.target.value })}
        />
        <InputTextAndDate
          type="date"
          value={this.state.date}
          error={this.state.dateError}
          onChange={(event) => this.setState({ date: event.target.value })}
        />
        <InputSelect
          value={this.state.language}
          error={this.state.languageError}
          onChange={(event) => this.setState({ language: event.target.value })}
        />
        <InputRadio
          value={this.state.gender}
          error={this.state.genderError}
          onChange={(event) => this.setState({ gender: event.target.value })}
        />
        <InputFile
          value={this.state.file as string}
          error={this.state.fileError}
          onChange={this.uploadFile.bind(this)}
        />
        <InputCheckbox
          checked={this.state.agreement}
          error={this.state.agreementError}
          onChange={(event) =>
            this.setState({ agreement: event.target.checked })
          }
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
