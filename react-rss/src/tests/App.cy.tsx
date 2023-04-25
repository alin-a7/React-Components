import { BrowserRouter } from 'react-router-dom'
import { mount } from '@cypress/react18'
import { Provider } from 'react-redux'

import App from '../App'
import { setupStore } from '@/store/store'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout/Layout'
import Card from '@/pages/CardsPage/components/Card'
import { allCharacters } from '@/constants/allCharacters'
import CardList from '@/pages/CardsPage/components/CardList/CardList'
import CardsList from '@/pages/FormsPage/components/CardsList'
import Form from '@/pages/FormsPage/components/Form'

const store = setupStore()

describe('<App>', () => {
  it('mounts', () => {
    mount(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    )
  })
})

describe('<Header>', () => {
  it('mounts', () => {
    mount(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
  })
})

describe('<Footer>', () => {
  it('mounts', () => {
    mount(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    )
  })
})

describe('<Layout>', () => {
  it('mounts', () => {
    mount(
      <BrowserRouter>
        <Layout>Hello World!</Layout>
      </BrowserRouter>,
    )
  })
})

describe('<Card> on the CardsPage', () => {
  it('mounts', () => {
    mount(
      <Provider store={store}>
        <Card {...allCharacters[0]} />
      </Provider>,
    )
  })
})

describe('<CardList> on the CardsPage', () => {
  it('mounts', () => {
    mount(
      <Provider store={store}>
        <CardList />
      </Provider>,
    )
  })
})

describe('<CardsList> on the FormPage', () => {
  it('mounts', () => {
    mount(
      <Provider store={store}>
        <CardsList />
      </Provider>,
    )
  })
})

describe('<Form>', () => {
  it('mounts', () => {
    mount(
      <Provider store={store}>
        <Form />
      </Provider>,
    )
  })
})
