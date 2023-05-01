import { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { PATHS } from '../../router/paths'
import { ReactComponent as Logo } from '../../assets/logo.svg'

import { NAVIGATION_MENU } from './constants'

import styles from './Header.module.scss'

const Header: FC = () => {
  const { pathname } = useLocation()
  const currentPage = pathname.slice(1) || 'cards'

  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <NavLink to={PATHS.CARDS}>
          <Logo className={styles.logo} />
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
    </header>
  )
}
export default Header
