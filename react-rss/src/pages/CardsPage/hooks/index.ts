import { useEffect, useState } from 'react'

import { useModal } from '../../../hooks/useModal'

import { BASE_URL } from '../utils'
import { Character } from '../../../store/types/characterTypes'

// export const useCardsPage = () => {
//   const [error, setError] = useState<boolean>(false)
//   const [isLoading, setIsloading] = useState<boolean>(true)
//   // const [allPerson, setAllPerson] = useState<Character[]>([])
//   const [searchValue, setSearchValue] = useState<string>(
//     localStorage.getItem('searchValue') || '',
//   )

//   useEffect(() => {
//     const getAllProducts = async () => {
//       try {
//         setIsloading(true)
//         const response = await fetch(getURL(searchValue))
//         const products: Character[] = (await response.json()).results
//         setAllPerson(products)
//       } catch {
//         setError(true)
//       } finally {
//         setIsloading(false)
//       }
//     }
//     getAllProducts()
//   }, [searchValue])

//   const searchCharacter = (name: string) => {
//     setSearchValue(name)
//     localStorage.setItem('searchValue', name)
//   }

//   return { error, isLoading, allPerson, searchValue, searchCharacter }
// }

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
