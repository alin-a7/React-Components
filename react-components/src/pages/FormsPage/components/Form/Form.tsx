import React, { ChangeEvent, ChangeEventHandler, Component } from 'react'

import InputText from './InputText'

import styles from './Form.module.scss'

interface FormProps {
  formSubmit: (card: FormState) => void
}

export interface FormState {
  name: string
}

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props)
    this.state = {
      name: '',
    }
  }

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target
    const value = target.value
    this.setState({
      name: value,
    })
    this.setState({})
  }

  render(): React.ReactNode {
    return (
      <div className={styles.wrapper}>
        <InputText
          value={this.state.name}
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
