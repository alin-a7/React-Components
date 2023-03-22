import { ChangeEventHandler, Component } from 'react'

import styles from './Form.module.scss'

interface InputTextProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  value?: string 
  type: string 
}

class InputTextAndDate extends Component<InputTextProps> {
  render() {
    return (
        <input
          type={this.props.type}
          className={styles.textInput}
          placeholder="Enter your first and last name"
          onChange={this.props.onChange}
          value={this.props.value}
        />
    )
  }
}

export default InputTextAndDate
