import { ChangeEvent, useEffect, useState } from 'react'

import Card from './components/Card'
import Layout from '../../components/Layout'
import { Product } from './components/Card/Card'
import InputSearch from './components/InputSearch'

import styles from './CardsPage.module.scss'

const CardsPage = () => {
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [allProducts, setAllProduct] = useState<Product[]>([])
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setIsloading(true)
        const response = await fetch('https://fakestoreapi.com/products')
        const products = await response.json()
        setAllProduct(products)
        setIsloading(false)
      } catch {
        setError(true)
      }
    }
    getAllProducts()
    setSearchValue(localStorage.getItem('searchValue') || '')
  }, [])

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLocaleLowerCase()
    setSearchValue(value)
    localStorage.setItem('searchValue', value)
  }

  if (error)
    return <Layout>Download error, check your internet connection</Layout>
  if (isLoading) return <Layout>Loading...</Layout>
  return (
    <Layout>
      <InputSearch value={searchValue || ''} onChange={(e) => search(e)} />
      <div className={styles.cardWrapper}>
        {allProducts
          .filter((item: Product) =>
            item.title.toLocaleLowerCase().includes(searchValue || ''),
          )
          .map((item: Product) => (
            <Card key={item.id} {...item} />
          ))}
      </div>
    </Layout>
  )
}

export default CardsPage
