import { Component, RefObject } from 'react'

import styles from '../Form.module.scss'

interface InputCheckboxProps {
  error: boolean
  refs?: RefObject<HTMLInputElement>
}

class InputCheckbox extends Component<InputCheckboxProps> {
  render() {
    return (
      <>
        <label className={styles.checkbox}>
          <input
            ref={this.props.refs}
            type="checkbox"
            data-testid="checkbox"
          />
          <span>I consent to my personal data</span>
        </label>
        {this.props.error && (
          <div className={styles.error}>The field is required</div>
        )}
      </>
    )
  }
}

export default InputCheckbox
