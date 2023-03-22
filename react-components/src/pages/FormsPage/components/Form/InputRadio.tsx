import { ChangeEventHandler, Component } from 'react'

import styles from './Form.module.scss'

interface InputRadioProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
}

class InputRadio extends Component<InputRadioProps> {
  render() {
    return (
      <label className={styles.selectInput}>
        Select a gender:
        <InputRadioItem
          value={this.props.value}
          onChange={this.props.onChange}
          itemValue="male"
        />
        <InputRadioItem
          value={this.props.value}
          onChange={this.props.onChange}
          itemValue="female"
        />
      </label>
    )
  }
}

interface InputRadioItemProps extends InputRadioProps {
  itemValue: string
}

class InputRadioItem extends Component<InputRadioItemProps> {
  render() {
    return (
        <label className={styles.radioLabel}>{this.props.itemValue}
        <input
          type="radio"
          value={this.props.itemValue}
          checked={this.props.value === this.props.itemValue ? true : false}
          onChange={this.props.onChange}
        />
        </label>
    )
  }
}

export default InputRadio
