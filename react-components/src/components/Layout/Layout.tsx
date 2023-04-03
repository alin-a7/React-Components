import { FC, ReactNode } from 'react'

import Menu from '../Menu'

import styles from './Layout.module.scss'

type LayotProps = {
  children: ReactNode
}

const Layout: FC<LayotProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Menu />
      <div className={styles.childrenBlock}>{children}</div>
    </div>
  )
}

export default Layout
