import React from 'react';
import { BrowserRouter,Route, Routers } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
      <Routers>
        <Route exact path="/">
        <Login authService={authService} />
        </Route>
      </Routers>
      </BrowserRouter>
    </div>
  );
}

export default App;
