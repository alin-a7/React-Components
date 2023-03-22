import React, { ChangeEvent, Component, FormEvent } from 'react'

import InputTextAndDate from './InputTextAndDate'
import InputSelect from './InputSelect'
import InputRadio from './InputRadio'

import styles from './Form.module.scss'

interface FormProps {
  createCard: (card: FormState) => void
}

export interface FormState {
  text: string
  date: string
  language: string
  gender: string
}

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props)
    this.state = {
      text: '',
      date: '',
      language: 'russian',
      gender: '',
    }
  }

  formSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    this?.props.createCard(this.state)
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
