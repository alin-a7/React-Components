import { NavLink } from 'react-router-dom'

import { PATHS } from '../../router/paths'

import styles from './Page404.module.scss'

const Page404 = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404 NOT FOUND</h1>
      <NavLink to={PATHS.CARDS}>
        <p className={styles.text}>
          Please, keep calm and return to the home page
        </p>
      </NavLink>
    </div>
  )
}

export default Page404
