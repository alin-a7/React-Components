import { Route, Routes } from 'react-router-dom'

import { routes } from './router/routes'

function App() {
  return (
    <Routes>
      {routes.map(({ path, component: Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
    </Routes>
  )
}

export default App
