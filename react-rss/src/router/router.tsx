import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './routes'

const Router: FC = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
    </Routes>
  )
}

export default Router
