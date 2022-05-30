import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowerRouter>
      <Switch>
        <Route exact path="/">
        <Login authService={authService} />
        </Route>
      </Switch>
      </BrowerRouter>
    </div>
  );
}

export default App;
