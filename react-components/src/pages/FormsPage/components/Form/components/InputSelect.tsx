import { Component, RefObject } from 'react'

import { OPTIONS } from './constant'

import styles from '../Form.module.scss'

interface InputSelectProps {
  error: boolean
  refs?: RefObject<HTMLSelectElement>
}

class InputSelect extends Component<InputSelectProps> {
  render() {
    return (
      <>
        <label className={styles.selectInput}>
          Select a language:
          <select
            ref={this.props.refs}
            data-testid="select"
            className={styles.selectItems}
          >
            {OPTIONS.map(({ value, label }, index) => (
              <option key={index} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        {this.props.error && (
          <div className={styles.error}>The field is required</div>
        )}
      </>
    )
  }
}

export default InputSelect
