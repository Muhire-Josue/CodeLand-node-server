import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import capitalize from 'src/utils/capitalize';

type RouteType = {
  name: string;
  path: string;
  protected: boolean;
  element: React.ComponentType<any>;
};

type AppRoutesProps = {
  routes: RouteType[];
};

const RouteElement: React.FC<{ route: RouteType }> = ({ route }): React.ReactElement => {
  useEffect(() => {
    document.title = `${capitalize(route.name)} | codeland`;
  }, []);

  return <route.element />;
};

const AppRoutes: React.FC<AppRoutesProps> = ({ routes }): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.name} path={route.path} element={<RouteElement route={route} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
