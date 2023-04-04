import { ChangeEvent, useEffect, useRef, useState } from 'react'

import { Person } from '../components/Card/Card'

export const useCardsPage = () => {
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsloading] = useState<boolean>(true)
  const [allPerson, setAllPerson] = useState<Person[]>([])
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
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const products: Person[] = (await response.json()).results
        setAllPerson(products)
      } catch {
        setError(true)
      } finally {
        setIsloading(false)
      }
    }
    getAllProducts()
  }, [])

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLocaleLowerCase()
    setSearchValue(value)
  }

  return { error, isLoading, allPerson, searchValue, search }
}
