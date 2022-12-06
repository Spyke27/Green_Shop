import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import CadastroUsuario from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Produtos from './paginas/produtos/Produtos';
import SobreNos from './paginas/sobreNos/SobreNos';

function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>} />

          <Route path='/sobrenos' element={<SobreNos/>} />

          <Route path='/cadastro' element={<CadastroUsuario/>}/>

          <Route path='/login' element={<Login/>}/>

          <Route path='/produtos' element={<Produtos/>}/>

        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
