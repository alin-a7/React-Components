import React, { FC, ReactNode } from 'react'

import Menu from '../Menu'

import styles from './Layout.module.scss'

interface Product {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: { rate: number; count: number }
  title: string
}

class Card extends React.Component<Product> {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.childrenBlock}>{this.props.title}</div>
      </div>
    )
  }
}

export default Card
