import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './views/login/Login';
import { Home } from './views/home/Home';
import { Create } from './views/create/Create';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/post' element={<Create/>}/>
    </Routes>
  );
}

export default App;
