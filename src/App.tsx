import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';

function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
