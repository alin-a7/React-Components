import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { NAVIGATION_MENU } from './constants'

import styles from './Menu.module.scss'

const Menu: FC = () => {

  return (
    <nav className={styles.container}>
      {NAVIGATION_MENU.map(({ to, label }, index) => (
        <NavLink key={index} to={to} className={styles.menuItem}>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Menu
