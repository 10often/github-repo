import React from 'react';
import { useRoutes } from 'react-router-dom';
import styles from './app.module.scss';
import { routes as routeList } from './routes';

export function App() {
  const routes = useRoutes(routeList);

  return <div className={styles.app}>{routes}</div>;
}

export default App;
