import { ChangeEventHandler, Component } from 'react'

import styles from '../Form.module.scss'

interface InputTextProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
  type: string
  error: boolean
}

class InputTextAndDate extends Component<InputTextProps> {
  render() {
    return (
      <>
        <input
          type={this.props.type}
          className={styles.textInput}
          placeholder="Enter your first and last name"
          onChange={this.props.onChange}
          value={this.props.value}
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