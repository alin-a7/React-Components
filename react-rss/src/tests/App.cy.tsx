import { BrowserRouter } from 'react-router-dom'
import { mount } from '@cypress/react18'
import { Provider } from 'react-redux'

import App from '../App'
import { setupStore } from '@/store/store'

describe('<App>', () => {
  const store = setupStore()

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
