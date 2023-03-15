import { FC, ReactNode } from 'react'

import Menu from '../Menu'

import styles from './Layout.module.scss'

type LayotProps = {
  children: ReactNode
}

const Layout: FC<LayotProps> = (props) => {

  return (
    <div className={styles.layout}>
        <Menu />
        <div className={styles.childrenBlock}>{props.children}</div>
    </div>
  )
}

export default Layout
