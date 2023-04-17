import { Component } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { routes } from './routes'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Router
