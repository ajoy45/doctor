import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import Home from '../src/Pagess/Home/Home';
import Servicess from '../src/Pagess/Servicess/Servicess';
import About from '../src/Pagess/About/About';
import { Route, Routes } from 'react-router-dom';
import Login from './Pagess/Login/Login';
import Singup from './Pagess/Singup/Singup';
import Footer from './Shared/Footer/Footer';
import Checkout from './Pagess/Checkout/Checkout';
import RequiredAuth from './RequiredAuth/RequiredAuth';
import Blogs from './Pagess/Blogs/Blogs';

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
        <Route path="/blog"element={<Blogs></Blogs>}></Route>
        <Route path="/checkout"element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>
        }></Route>
        <Route path="/singup"element={<Singup></Singup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
