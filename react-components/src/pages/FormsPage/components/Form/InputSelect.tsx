import { ChangeEventHandler, Component } from 'react'

import styles from './Form.module.scss'

interface InputSelectProps {
  onChange: ChangeEventHandler<HTMLSelectElement>
  value?: string
}

class InputSelect extends Component<InputSelectProps> {
  render() {
    return (
      <label className={styles.selectInput}>
        Select a language:
        <select className={styles.selectItems} value={this.props.value} onChange={this.props.onChange}>
          <option className={styles.option} value="russian">Russian</option>
          <option value="belarusian">Belarusian</option>
          <option value="english">English</option>
          <option value="german">German</option>
        </select>
      </label>
    )
  }
}

export default InputSelect
