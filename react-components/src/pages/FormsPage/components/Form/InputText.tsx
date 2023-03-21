import { ChangeEventHandler, Component } from 'react'

import styles from './Form.module.scss'

interface InputTextProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  value?: string 
}

class InputText extends Component<InputTextProps> {
  render() {
    return (
        <input
          type="text"
          className={styles.textInput}
          placeholder="Enter your first and last name"
          onChange={this.props.onChange}
          value={this.props.value}
        />
    )
  }
}

export default InputText
