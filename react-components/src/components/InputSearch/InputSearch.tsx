import React, { FC, ChangeEventHandler } from 'react'

import styles from './InputSearch.module.scss'

interface Search {
  onChange: ChangeEventHandler<HTMLInputElement>
  value?: string
}

class InputSearch extends React.Component<Search> {
  render() {
    return (
      <div className={styles.wrapper}>
        <img src="../../src/assets/search.svg" className={styles.searchIcon} />
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search products!"
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    )
  }
}

export default InputSearch
