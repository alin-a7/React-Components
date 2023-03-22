import { ChangeEventHandler, Component } from 'react'

import styles from './Form.module.scss'

interface InputCheckboxProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  checked: boolean
}

class InputCheckbox extends Component<InputCheckboxProps> {
  render() {
    return (
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        <span>I consent to my personal data</span>
      </label>
    )
  }
}

export default InputCheckbox
