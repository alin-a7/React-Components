import React from 'react'
import { NavLink } from 'react-router-dom'

import { PATHS } from '../../router/paths'

import { NAVIGATION_MENU } from './constants'

import styles from './Menu.module.scss'

class Menu extends React.Component {
  render() {
    return (
      <nav className={styles.container}>
        <NavLink to={PATHS.CARDS}>
          <img
            src="../../src/assets/logo.svg"
            alt="logo"
            className={styles.logo}
          />
        </NavLink>
        {NAVIGATION_MENU.map(({ to, label }, index) => (
          <NavLink key={index} to={to} className={styles.menuItem}>
            {label}
          </NavLink>
        ))}
      </nav>
    )
  }
}
export default Menu
