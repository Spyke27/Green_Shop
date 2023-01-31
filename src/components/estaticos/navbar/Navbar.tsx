import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Sacola from "./sacola.png";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from '@mui/icons-material/Search';
import MenuBarrinha from "./menu/Menu";
import { Link, useNavigate } from "react-router-dom";
import FadeMenu from "../../menuDrop/menuDrop";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../../store/tokens/action";
import TokenState from "../../../store/tokens/tokenReducer";
import ModalCarrinho from "../../carrinho/modalCarrinho";
import MenuDrop from '../../menuDrop/menuDrop'


function Navbar() {

  const navigate= useNavigate()
  const token= useSelector<TokenState, TokenState["tokens"]>(
    (state)=> state.tokens
  )
  const dispatch= useDispatch()


  function goLogout(){
      dispatch(addToken(''));
      navigate('/login')
  }

  return (
    <>
      <AppBar position="fixed" className="appbar">
        <Toolbar variant="dense" className="bar">
        
          
        <div className="MenuBarrinha"><MenuBarrinha /></div>

          <Box className="logo">
            <Typography className="text-logo" variant="h5" color="inherit">
              <a className="LogoEffect">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div data-text='GreenShop' className="Shop">
                  GreenShop 
                  <div className="barrinha"></div>
                </div>
              </a>
            </Typography>
          </Box>

          <Box className="menu-right" display="flex">


            <Box className="pesquisa">
              <FormControl variant="standard" color='success' >
                <Input placeholder="Buscar Produtos" startAdornment={<InputAdornment position="start"><SearchIcon className="lupa" /></InputAdornment>} />
              </FormControl>
            </Box>

            <Box className="Poupup">
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button
                      className="perfil" 
                      variant="contained"
                      {...bindTrigger(popupState)}
                    >
                      <div className="conta">Minha Conta</div>
                      <div className="conta2"><img src={require('../navbar/img/perfil.png')} width='29' height='29'/></div>
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close} ><Link to='/perfil' className='btn-link'>Perfil</Link></MenuItem>
                      <MenuItem onClick={popupState.close}>
                        Meus Pedidos
                      </MenuItem>
                      <MenuItem onClick={popupState.close} ><Link to='/login' className='btn-link'>Login</Link></MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Box>

            <Box className="sacola">
              <div className="sacolaa">
              <ModalCarrinho/>              
              </div>
            </Box>


          </Box>
        </Toolbar>

        <Toolbar className="bar2">
        <Link to='/home'>Home</Link>          
        <Link to='/produtos/all'>produtos</Link>
        <MenuDrop/>
        <Link to='/sobre-nos'>Sobre Nós</Link>
        </Toolbar>

      </AppBar>

    </>
  );
}
export default Navbar;