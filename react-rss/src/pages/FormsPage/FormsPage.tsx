import Layout from '../../components/Layout'

import CardsList from './components/CardsList'
import Form from './components/Form'

import styles from './FormsPage.module.scss'

const FormsPage = () => {

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
