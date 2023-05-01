import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'

import { setupStore } from './store/store'
import App from '@/router/App'
import { fetchAllCharacters } from './store/services/CharacterService'

export const render = async (url: string, options?: object) => {
  const store = setupStore()

  await store.dispatch(fetchAllCharacters.initiate(''))

  const pipe = renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    options,
  )

  return { pipe, store }
}
