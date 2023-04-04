import { useEffect, useState } from 'react'

import { Person } from '../components/Card/Card'
import { getURL } from '../utils'

export const useCardsPage = () => {
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsloading] = useState<boolean>(true)
  const [allPerson, setAllPerson] = useState<Person[]>([])
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchValue') || '',
  )

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setIsloading(true)
        const response = await fetch(getURL(searchValue))
        const products: Person[] = (await response.json()).results
        setAllPerson(products)
      } catch {
        setError(true)
      } finally {
        setIsloading(false)
      }
    }
    getAllProducts()
  }, [searchValue])

  const searchCharacter = (name: string) => {
    setSearchValue(name)
    localStorage.setItem('searchValue', name)
  }

  return { error, isLoading, allPerson, searchValue, searchCharacter }
}
