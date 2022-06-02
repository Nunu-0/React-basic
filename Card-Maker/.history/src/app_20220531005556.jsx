import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
      <Routes>
        <Route exact path="/">
        <Login authService={authService} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
