import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import Home from '../src/Pagess/Home/Home';
import Servicess from '../src/Pagess/Servicess/Servicess';
import About from '../src/Pagess/About/About';
import { Route, Routes } from 'react-router-dom';
import Login from './Pagess/Login/Login';
import Singup from './Pagess/Singup/Singup';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/"element={<Home></Home>}></Route>
        <Route path="/home"element={<Home></Home>}></Route>
        <Route path="/services"element={<Servicess></Servicess>}></Route>
        <Route path="/about"element={<About></About>}></Route>
        <Route path="/login"element={<Login></Login>}></Route>
        <Route path="/singup"element={<Singup></Singup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
