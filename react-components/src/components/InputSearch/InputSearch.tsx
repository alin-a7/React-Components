import { ChangeEventHandler, FC } from 'react'

import styles from './InputSearch.module.scss'

interface Search {
  onChange: ChangeEventHandler<HTMLInputElement>
  value?: string
}

const InputSearch: FC<Search> = ({ onChange, value }) => {
  return (
    <div className={styles.wrapper}>
      <img src="../../src/assets/search.svg" className={styles.searchIcon} />
      <input
        type="search"
        className={styles.searchInput}
        placeholder="Search products!"
        onChange={onChange}
        value={value}
      />
    </div>
  )
}
export default InputSearch
