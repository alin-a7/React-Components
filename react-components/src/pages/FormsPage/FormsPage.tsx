import { useState } from 'react'

import Layout from '../../components/Layout'

import CardsList from './components/CardsList'
import { FormState } from './components/Form/Form'
import Form from './components/Form'

import styles from './FormsPage.module.scss'

const FormsPage = ()=> {
  const [cardArray, setCardArray] = useState<FormState[]>([])

    return (
      <Layout>
        <div className={styles.wrapper}>
          <Form setCardArray={setCardArray}/>
          <CardsList cardArray={cardArray}/>
        </div>
      </Layout>
    )
}

export default FormsPage
