import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <BrowserRouter>
      <Routes>
    <div className={styles.app}>
        <Route exact path="/">
          <Login authService={authService} />
        </Route>
        <Route path="/maker">
          <Maker/>
        </Route>
    </div>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
