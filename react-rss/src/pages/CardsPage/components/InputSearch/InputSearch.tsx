import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { setCharacterName } from '../../../../store/reducers/characterSlice'

import styles from './InputSearch.module.scss'

interface FormState {
  characterName: string
}

const InputSearch: FC = () => {
  const { register, handleSubmit, setValue } = useForm<FormState>()

  const dispatch = useAppDispatch()
  const { characterName } = useAppSelector((store) => store.characters)

  useEffect(() => {
    setValue('characterName', characterName)
  }, [setValue, characterName])

  const submit = (data: FormState) => {
    dispatch(setCharacterName(data.characterName))
  }

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.wrapper}>
      <img src="../../src/assets/search.svg" className={styles.searchIcon} />
      <input
        type="search"
        className={styles.searchInput}
        placeholder="Search characters!"
        {...register('characterName')}
      />
      <button type="submit" className={styles.searcButton}>
        Search!
      </button>
    </form>
  )
}
export default InputSearch
