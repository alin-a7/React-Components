import { ChangeEventHandler, Component } from 'react'

import styles from './Form.module.scss'

interface InputSelectProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  value?: string
}

class InputFile extends Component<InputSelectProps> {
  render() {
    return (
      <label className={styles.fileInput}>
        <div className={styles.title}>Upload file: {this.props.value}</div>
        <input
          type="file"
          className={styles.input}
          onChange={(event) => this.props.onChange(event)}
        />
      </label>
    )
  }
}

export default InputFile
