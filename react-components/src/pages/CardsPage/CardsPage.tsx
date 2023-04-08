import Card from './components/Card'
import Layout from '../../components/Layout'
import { Product } from './components/Card/Card'
import InputSearch from './components/InputSearch'
import { useCardsPage } from './hooks'

import styles from './CardsPage.module.scss'

const CardsPage = () => {
  const { error, isLoading, searchValue, search, filterCards } = useCardsPage()

  if (error)
    return <Layout>Download error, check your internet connection</Layout>
  if (isLoading) return <Layout>Loading...</Layout>
  return (
    <Layout>
      <InputSearch value={searchValue} onChange={(e) => search(e)} />
      <div className={styles.cardWrapper}>
        {filterCards[0] ? (
          filterCards.map((item: Product) => <Card key={item.id} {...item} />)
        ) : (
          <div className={styles.notFound}>No cards found...</div>
        )}
      </div>
    </Layout>
  )
}

export default CardsPage
