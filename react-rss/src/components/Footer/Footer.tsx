import { FC } from 'react'

import { ReactComponent as RSLogo } from '../../assets/rs.svg'

import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <div>© 2023</div>
      <a href="https://rs.school/" target="_blank" rel="noreferrer">
        <RSLogo className={styles.logo} />
      </a>
      <a href="https://github.com/alin-a7" target="_blank" rel="noreferrer">
        Designer: Alina M
      </a>
    </footer>
  )
}
export default Footer
