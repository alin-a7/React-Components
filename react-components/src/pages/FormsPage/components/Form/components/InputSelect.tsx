import { ChangeEventHandler, Component } from 'react'

import styles from '../Form.module.scss'

interface InputSelectProps {
  onChange: ChangeEventHandler<HTMLSelectElement>
  value: string
  error: boolean
}

class InputSelect extends Component<InputSelectProps> {
  render() {
    return (
      <>
        <label className={styles.selectInput}>
          Select a language:
          <select
            className={styles.selectItems}
            value={this.props.value}
            onChange={this.props.onChange}
          >
            <option value="">Language</option>
            <option value="russian">Russian</option>
            <option value="belarusian">Belarusian</option>
            <option value="english">English</option>
            <option value="german">German</option>
          </select>
        </label>
        {this.props.error && <div className={styles.error}>The field is required</div>}
      </>
    )
  }
}

export default InputSelect
