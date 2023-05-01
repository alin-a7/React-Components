import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { RootState, setupStore } from './store/store'

import App from '@/router/App'

import './index.scss'

const store = setupStore((window as typeof window & { __PRELOADED_STATE__: RootState }).__PRELOADED_STATE__)

Reflect.deleteProperty(window, '__PRELOADED_STATE__')

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
