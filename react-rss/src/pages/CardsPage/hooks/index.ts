import { useEffect, useState } from 'react'

import { useModal } from '../../../hooks'

import { BASE_URL, getURL } from '../utils'

export interface Character {
  id?: number
  name: string
  status?: string
  species: string
  type?: string
  gender: string
  origin?: {
    name: string
    url: string
  }
  location: {
    name: string
    url?: string
  }
  image: string
  episode: string[]
  url?: string
  created?: string
}

export const useCardsPage = () => {
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsloading] = useState<boolean>(true)
  const [allPerson, setAllPerson] = useState<Character[]>([])
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchValue') || '',
  )

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setIsloading(true)
        const response = await fetch(getURL(searchValue))
        const products: Character[] = (await response.json()).results
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

export const getSelectCharacterInfo = () => {
  const [selectCharacter, setSelectCharacter] = useState<Character>(
    {} as Character,
  )

  const { isVisible, open: openModal, close: closeModal } = useModal()

  const getCharacter = async (id: number) => {
    openModal()

    const response = await fetch(`${BASE_URL}/${id}`)
    const character: Character = await response.json()
    setSelectCharacter(character)
  }

  return { isVisible, closeModal, selectCharacter, getCharacter }
}
