import Layout from '../../components/Layout'

import { Person } from './components/Card/Card'
import InputSearch from './components/InputSearch'
import Card from './components/Card'
import { useCardsPage } from './hooks'

import styles from './CardsPage.module.scss'

const CardsPage = () => {
  const { error, isLoading, searchValue, searchCharacter, allPerson } =
    useCardsPage()

  return (
    <Layout>
      <InputSearch value={searchValue} searchCharacter={searchCharacter} />
      {error && (
        <div className={styles.notFound}>
          Download error, check your internet connection
        </div>
      )}
      {isLoading ? (
        <div className={styles.notFound}>Loading...</div>
      ) : allPerson?.length ? (
        <div className={styles.cardWrapper}>
          {allPerson.map((item: Person) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      ) : (
        !error && <div className={styles.notFound}>No cards found...</div>
      )}
    </Layout>
  )
}

export default CardsPage
