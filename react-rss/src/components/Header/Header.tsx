import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { PATHS } from '../../router/paths'

import { NAVIGATION_MENU } from './constants'

import styles from './Header.module.scss'

const Header: FC = () => {
  const currentPage = window.location.pathname.slice(1)

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <NavLink to={PATHS.CARDS}>
          <img
            src="../../src/assets/logo.svg"
            alt="logo"
            className={styles.logo}
          />
        </NavLink>
        <div className={styles.navLink}>
          {NAVIGATION_MENU.map(({ to, label }, index) => (
            <NavLink key={index} to={to} className={styles.menuItem}>
              {label}
            </NavLink>
          ))}
        </div>
        <div>Current page: {currentPage}</div>
      </nav>
    </div>
  )
}
export default Header
