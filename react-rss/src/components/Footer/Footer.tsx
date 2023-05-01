import { FC } from 'react'

import { ReactComponent as RSLogo } from '../../assets/rs.svg'

import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <div>© 2023</div>
      <Link to="https://rs.school/" target="_blank" rel="noreferrer">
        <RSLogo className={styles.logo} />
      </Link>
      <Link to="https://github.com/alin-a7" target="_blank" rel="noreferrer">
        Designer: Alina M
      </Link>
    </footer>
  )
}
export default Footer
