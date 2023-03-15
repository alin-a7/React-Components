import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { routes } from "./routes";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/cards" />} />
        {routes.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
