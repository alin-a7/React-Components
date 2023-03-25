import { Component } from 'react'

import Layout from '../../components/Layout'

import CardsList from './components/CardsList'
import Form from './components/Form'

import styles from './FormsPage.module.scss'

export interface ICard {
  text: string
  date: string
  language: string
  gender: string
  file: string
}

interface FormsPageState {
  cardArray: ICard[]
}

class FormsPage extends Component<object, FormsPageState> {
  constructor(props: FormsPageState) {
    super(props)
    this.state = {
      cardArray: [],
    }
    this.createCard = this.createCard.bind(this)
  }

  createCard(card: ICard){
    this.setState({ cardArray: [...this.state.cardArray, card] })
  }

  render() {
    return (
      <Layout>
        <div className={styles.wrapper}>
          <Form createCard={this.createCard}/>
          <CardsList cardArray={this.state.cardArray}/>
        </div>
      </Layout>
    )
  }
}

export default FormsPage
