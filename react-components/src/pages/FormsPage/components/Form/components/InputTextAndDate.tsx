import { Component, RefObject } from 'react'

import styles from '../Form.module.scss'

interface InputTextProps {
  type: string
  error: boolean
  refs?: RefObject<HTMLInputElement>
}

class InputTextAndDate extends Component<InputTextProps> {
  render() {
    return (
      <>
        <input
          ref={this.props.refs}
          type={this.props.type}
          className={styles.textInput}
          placeholder="Enter your first and last name"
        />
        {this.props.error && (
          <div className={styles.error}>
            {this.props.type === 'text'
              ? 'The name must consist of 2 words and begin with a capital letter'
              : 'The field is required'}
          </div>
        )}
      </>
    )
  }
}

export default InputTextAndDate
