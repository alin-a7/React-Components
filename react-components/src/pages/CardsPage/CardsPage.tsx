import React, { ChangeEvent } from 'react'

import Card from '../../components/Card'
import Layout from '../../components/Layout'

import { Product } from '../../components/Card/Card'
import InputSearch from '../../components/InputSearch'

import styles from './CardsPage.module.scss'

class CardsPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      searchValue: '',
    }
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
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
    this.setState({
      searchValue: e.target.value.trim().toLocaleLowerCase(),
    })
  }

  render(): React.ReactNode {
    const { error, isLoaded, items, searchValue } = this.state
    if (error) {
      return <Layout>Download error, check your internet connection</Layout>
    } else if (!isLoaded) {
      return <Layout>Loading...</Layout>
    } else {
      return (
        <Layout>
          <InputSearch onChange={(e) => this.search(e)} />
          <div className={styles.cardWrapper}>
            {items
              .filter((item: Product) =>
                item.title.toLocaleLowerCase().includes(searchValue),
              )
              .map((item: Product) => (
                <Card key={item.id} {...item} />
              ))}
          </div>
        </Layout>
      )
    }
  }
}

export default CardsPage
