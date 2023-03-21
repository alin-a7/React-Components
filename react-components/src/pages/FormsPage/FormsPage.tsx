import { Component } from 'react'

import Layout from '../../components/Layout'

import CardsList from './components/CardsList'
import { FormState } from './components/Form/Form'
import Form from './components/Form'

import styles from './FormsPage.module.scss'

interface FormsPageState {
  cardArray: FormState[]
}

class FormsPage extends Component<object, FormsPageState> {
  constructor(props: FormsPageState) {
    super(props)
    this.state = {
      cardArray: [],
    }
    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit(card: FormState){
    this.setState({ cardArray: [...this.state.cardArray, card] })
  }

  render() {
    return (
      <Layout>
        <div className={styles.wrapper}>
          <Form formSubmit={this.formSubmit}/>
          <CardsList cardArray={this.state.cardArray}/>
        </div>
      </Layout>
    )
  }
}

export default FormsPage
