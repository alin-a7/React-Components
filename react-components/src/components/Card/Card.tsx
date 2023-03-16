import React from 'react'

import styles from './Card.module.scss'

export interface Product {
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
        <img
          src={this.props.image}
          alt={this.props.title}
          className={styles.image}
        />
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.description}>{this.props.description}</div>
        <div className={styles.cardFooter}>
          <div className={styles.rating}>
            <div>Rate: {this.props.rating.rate}</div>
            <div>Count: {this.props.rating.count}</div>
          </div>
          <div className={styles.price}>{this.props.rating.count}$</div>
        </div>
      </div>
    )
  }
}

export default Card
