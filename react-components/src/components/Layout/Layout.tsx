import React, { FC, ReactNode } from 'react'

import Menu from '../Menu'

import styles from './Layout.module.scss'

type LayotProps = {
  children: ReactNode
}

class Layout extends React.Component<LayotProps> {
  render() {
    return (
      <div className={styles.layout}>
        <Menu />
        <div className={styles.childrenBlock}>{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
