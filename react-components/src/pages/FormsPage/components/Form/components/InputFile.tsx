import { Component, RefObject } from 'react'

import styles from '../Form.module.scss'

interface InputSelectProps {
  error: boolean
  refs?: RefObject<HTMLInputElement>
}

class InputFile extends Component<InputSelectProps> {
  render() {
    return (
      <>
        <label data-testid="file" className={styles.fileInput}>
          <input
            ref={this.props.refs}
            type="file"
            className={styles.input}
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
