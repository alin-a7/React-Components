import { FC } from 'react'

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

const Card: FC<Product> = ({
  description,
  image,
  price,
  rating,
  title,
}) => {
  return (
    <div className={styles.card} data-testid="card">
      <img
        src={image}
        alt={title}
        className={styles.image}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.cardFooter}>
        <div className={styles.rating}>
          <div>Rate: {rating.rate}</div>
          <div>Count: {rating.count}</div>
        </div>
        <div className={styles.price}>{price}$</div>
      </div>
    </div>
  )
}

export default Card
