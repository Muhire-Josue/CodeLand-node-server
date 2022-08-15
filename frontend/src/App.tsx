import React from 'react';

import 'src/assets/styles/index.scss';
import routes from 'src/routes';
import AppRoutes from 'src/AppRoutes';

const App: React.FC = (): React.ReactElement => {
  return <AppRoutes routes={routes} />;
};

export default App;
