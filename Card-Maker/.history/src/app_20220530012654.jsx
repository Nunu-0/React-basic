import './app.css';
import Login from './components/login/login';
import dotenv from 'dotenv'

dotenv.config()

function App({authService}) {
  return (
    <Login authService={authService}/>
  );
}

export default App;
