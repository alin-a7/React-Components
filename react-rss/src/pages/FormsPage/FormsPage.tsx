import { useState } from 'react'

import Layout from '../../components/Layout'

import CardsList from './components/CardsList'
import Form from './components/Form'

import styles from './FormsPage.module.scss'

// export interface ICard {
//   text: string
//   date: string
//   language: string
//   gender: string
//   file: string
//   agreement: boolean
// }

const FormsPage = () => {
  // const [cardArray, setCardArray] = useState<ICard[]>([])

  return (
    <Layout>
      <div className={styles.wrapper}>
        <Form  />
        <CardsList  />
      </div>
    </Layout>
  )
}

export default FormsPage
