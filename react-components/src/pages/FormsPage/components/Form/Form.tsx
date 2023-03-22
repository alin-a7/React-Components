import React, {
  ChangeEvent,
  Component,
  createRef,
  FormEvent,
  RefObject,
} from 'react'

import InputTextAndDate from './InputTextAndDate'
import InputSelect from './InputSelect'
import InputRadio from './InputRadio'

import styles from './Form.module.scss'
import InputFile from './InputFile'
import InputCheckbox from './InputCheckbox'

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
}

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props)
    this.state = {
      text: '',
      date: '',
      language: 'russian',
      gender: '',
      file: '',
      agreement: false,
    }
  }

  formSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(this?.state)

    this?.props.createCard(this.state)
  }

  uploadFile(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    const file = files?.item(0)?.name as string
    this.setState({ file: file })
  }

  render(): React.ReactNode {
    return (
      <form onSubmit={this.formSubmit} className={styles.wrapper}>
        <InputTextAndDate
          type="text"
          value={this.state.text}
          onChange={(event) => this.setState({ text: event.target.value })}
        />
        <InputTextAndDate
          type="date"
          value={this.state.date}
          onChange={(event) => this.setState({ date: event.target.value })}
        />
        <InputSelect
          value={this.state.language}
          onChange={(event) => this.setState({ language: event.target.value })}
        />
        <InputRadio
          value={this.state.gender}
          onChange={(event) => this.setState({ gender: event.target.value })}
        />
        <InputFile
          value={this.state.file}
          onChange={this.uploadFile.bind(this)}
        />
        <InputCheckbox
          checked={this.state.agreement}
          onChange={(event) =>
            this.setState({ agreement: event.target.checked })
          }
        />
        <button
          className={styles.button}
          onClick={() => this.props.createCard(this.state)}
        >
          Create card!
        </button>
      </form>
    )
  }
}

export default Form
