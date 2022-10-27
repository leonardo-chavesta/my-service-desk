import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateOutlet } from "./CheckPageNavigation";
import { privateRoutes } from "./Routes";

const RouterView = () => (
  <Routes>
    {privateRoutes.map((route, i) =>
      !(route.autorizacion ?? true) ? (
        <Route
          key={`private${i}`}
          path={route.path}
          element={<PrivateOutlet />}
        ></Route>
      ) : (
        <Route
          key={`private${i}`}
          path={route.path}
          element={<PrivateOutlet />}
        ></Route>
      )
    )}
  </Routes>
);

export default RouterView;
