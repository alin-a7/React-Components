import React, { ChangeEvent, Component } from 'react'

import Card from '../../components/Card'
import Layout from '../../components/Layout'
import { Product } from '../../components/Card/Card'
import InputSearch from '../../components/InputSearch'

import styles from './CardsPage.module.scss'

interface CardsPageProps {
  error: null | string
  isLoaded: boolean
  items: Product[]
  searchValue: string | null
}

class CardsPage extends Component<object, CardsPageProps> {
  constructor(props: CardsPageProps) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      searchValue: localStorage.getItem('searchValue')
        ? localStorage.getItem('searchValue')
        : '',
    }
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result as Product[],
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          })
        },
      )
  }

  search(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim().toLocaleLowerCase()
    this.setState({
      searchValue: value,
    })
    localStorage.setItem('searchValue', value)
  }

  render(): React.ReactNode {
    const { error, isLoaded, items, searchValue } = this.state
    if (error)
      return <Layout>Download error, check your internet connection</Layout>
    if (!isLoaded) return <Layout>Loading...</Layout>
    return (
      <Layout>
        <InputSearch
          value={searchValue || ''}
          onChange={(e) => this.search(e)}
        />
        <div className={styles.cardWrapper}>
          {items
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
}

export default CardsPage
