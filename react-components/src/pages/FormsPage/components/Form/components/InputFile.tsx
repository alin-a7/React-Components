import { ChangeEventHandler, Component } from 'react'

import styles from '../Form.module.scss'

interface InputSelectProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  value?: string
  error: boolean
}

class InputFile extends Component<InputSelectProps> {
  render() {
    return (
      <>
        <label data-testid="file" className={styles.fileInput}>
          <div className={styles.title}>Upload file: {this.props.value}</div>
          <input
            type="file"
            className={styles.input}
            onChange={(event) => this.props.onChange(event)}
          />
        </label>
        {this.props.error && (
          <div className={styles.error}>The field is required</div>
        )}
      </>
    )
  }
}

export default InputFile
