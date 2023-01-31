import React from 'react';
import Login from './paginas/login/login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SobreNos from './paginas/sobreNos/sobreNos';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/footer';
import { Provider } from 'react-redux';
import store from './store/store';
import ListaCategorias from './paginas/categorias/listaCategorias/listaCategorias';
import DeletarCategoria from './paginas/categorias/deletarCategorias/deletarCategoria';
import CadastroCategoria from './paginas/categorias/cadastrarCategorias/cadastrarCategoria';
import DeletarProduto from './paginas/produtos/deletarProduto/DeletarProduto';
import CadastrarProduto from './paginas/produtos/cadastrarProduto/CadastrarProduto';
import ListarProdutos from './paginas/produtos/listaProdutos/Produtos';
import CadastroUsuario from './paginas/cadastro/cadastro';
import Perfil from './paginas/perfil/Perfil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function App() {
  return (
    <>
    <Provider store={store}>
    <ToastContainer />
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/sobre-nos' element={<SobreNos/>}/>
          <Route path='/cadastro' element={<CadastroUsuario/>}/>
          <Route path='/produtos/all' element={<ListarProdutos/>}/>
          <Route path='/produtos/cadastrar' element={<CadastrarProduto/>}/>
          <Route path='/produtos/cadastrar/:id' element={<CadastrarProduto/>}/>
          <Route path='/produtos/deletar/:id' element={<DeletarProduto/>}/>
          <Route path='/categorias' element={<ListaCategorias/>}/>
          <Route path='/deletar/categoria/:id_categoria' element={<DeletarCategoria/>}/>
          <Route path="/cadastrar/categoria" element={<CadastroCategoria />} />
          <Route path="/atualizar/categoria/:id_categoria" element={<CadastroCategoria />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
        <Footer/> 
      </Router>
      </Provider>
    </>
  )
}

export default App;
