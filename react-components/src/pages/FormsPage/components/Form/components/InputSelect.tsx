import { ChangeEventHandler, Component } from 'react'

import { OPTIONS } from './constant'

import styles from '../Form.module.scss'

interface InputSelectProps {
  onChange: ChangeEventHandler<HTMLSelectElement>
  value?: string
  error: boolean
}

class InputSelect extends Component<InputSelectProps> {
  render() {
    return (
      <>
        <label className={styles.selectInput}>
          Select a language:
          <select
            data-testid="select"
            className={styles.selectItems}
            value={this.props.value}
            onChange={this.props.onChange}
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
