import { ChangeEvent, useEffect, useRef, useState } from 'react'

import { Product } from '../components/Card/Card'

export const useCardsPage = () => {
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [allProducts, setAllProduct] = useState<Product[]>([])
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchValue') || '',
  )

  const searchRef = useRef<string>()

  useEffect(() => {
    searchRef.current = searchValue
  }, [searchValue])

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchRef.current || '')
    }
  }, [])

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
  }, [])

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLocaleLowerCase()
    setSearchValue(value)
  }

  const filterCards = allProducts.filter((item: Product) =>
    item.title.toLocaleLowerCase().includes(searchValue),
  )

  return { error, isLoading, allProducts, searchValue, search, filterCards }
}
