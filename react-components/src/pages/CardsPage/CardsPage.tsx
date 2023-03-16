import React, { FC } from 'react'

import Card from '../../components/Card'
import Layout from '../../components/Layout'

import { Product } from '../../components/Card/Card'

import styles from './CardsPage.module.scss'

class CardsPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
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

  render(): React.ReactNode {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <Layout>Error: {error.message}</Layout>
    } else if (!isLoaded) {
      return <Layout>Loading...</Layout>
    } else {
      return (
        <Layout>
          <div className={styles.cardWrapper}>
            {items.map((item: Product) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </Layout>
      )
    }
  }
}

export default CardsPage
