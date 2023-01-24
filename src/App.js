import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/login';
import Register from './pages/register/register';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
