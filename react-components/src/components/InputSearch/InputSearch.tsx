import React, { FC, ChangeEventHandler } from 'react'

import styles from './InputSearch.module.scss'

interface Search {
  onChange: ChangeEventHandler<HTMLInputElement>
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
        />
      </div>
    )
  }
}

export default InputSearch
