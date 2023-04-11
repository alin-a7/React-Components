import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useAppDispatch } from '../../../../hooks/redux'
import { characterSlice } from '../../../../store/reducers/characterSlice'

import styles from './InputSearch.module.scss'

interface Search {
  searchCharacter?: (name: string) => void
  value?: string
}

interface FormState {
  name: string
}

const InputSearch: FC<Search> = ({ value }) => {
  const { register, handleSubmit, setValue } = useForm<FormState>()

  const dispatch = useAppDispatch()
  const { setCharacterName } = characterSlice.actions

  useEffect(() => {
    setValue('name', value || '')
  }, [value, setValue])

  const submit = (data: FormState) => {
    dispatch(setCharacterName(data.name))
  }

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.wrapper}>
      <img src="../../src/assets/search.svg" className={styles.searchIcon} />
      <input
        type="search"
        className={styles.searchInput}
        placeholder="Search characters!"
        {...register('name')}
      />
      <button type="submit" className={styles.searcButton}>
        Search!
      </button>
    </form>
  )
}
export default InputSearch
