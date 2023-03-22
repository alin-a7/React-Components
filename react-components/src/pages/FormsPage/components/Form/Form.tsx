import React, { ChangeEvent, Component } from 'react'

import InputTextAndDate from './InputTextAndDate'

import styles from './Form.module.scss'

interface FormProps {
  formSubmit: (card: FormState) => void
}

export interface FormState {
  text: string
  date: string
}

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props)
    this.state = {
      text: '',
      date: '',
    }
  }

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target
    const value = target.value
    target.type === 'text'
      ? this.setState({
          text: value,
        })
      : this.setState({
          date: value,
        })
  }

  render(): React.ReactNode {
    return (
      <div className={styles.wrapper}>
        <InputTextAndDate
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange.bind(this)}
        />
        <InputTextAndDate
          type="date"
          value={this.state.date}
          onChange={this.handleInputChange.bind(this)}
        />
        <button
          className={styles.button}
          onClick={() => this.props.formSubmit(this.state)}
        >
          Create card!
        </button>
      </div>
    )
  }
}

export default Form
