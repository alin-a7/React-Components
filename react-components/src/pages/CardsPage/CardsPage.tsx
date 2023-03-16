import React, { FC } from 'react'
import Layout from '../../components/Layout'

import styles from './AboutPage.module.scss'

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
          <ul>
            {items.map((item: any) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
                {item.price}
              </li>
            ))}
          </ul>
        </Layout>
      )
    }
  }
}

export default CardsPage
