import { Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Dashboard from './components/dashboard/dshboard';

function App() {

  let onLogin = async(inputUsername, inputPassword) => {
    try {
        let response = await axios.post(`http://localhost:5010/user/login`, {username: inputUsername, password: inputPassword})
    } catch (error) {
      console.log(error)
    }
}

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Login myFunc={{onLogin}}/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
