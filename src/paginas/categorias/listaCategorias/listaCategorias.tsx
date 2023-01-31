import React, { useEffect, useState } from 'react'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './listaCategorias.css';
import {Link, useNavigate} from 'react-router-dom';
import Categoria from '../../../model/Categoria';
import TokenState from '../../../store/tokens/tokenReducer';
import { useSelector } from 'react-redux';
import { busca } from '../../../service/Service';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { toast } from 'react-toastify';



function ListaCategorias () {
  const [categoria, setCategorias] = useState<Categoria[]>([])
 
  let navigate = useNavigate();
  const token = useSelector<TokenState,TokenState["tokens"]>(
    (state)=>  state.tokens
  )
  useEffect(()=>{
    if(token == ''){
      toast.error('Verifique as Informações!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      navigate("/login")
    }
  }, [token])


  async function getCategoria(){
    await busca("/categorias/all", setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getCategoria()
  }, [categoria.length])

  return (
    <>
     <Link to="/cadastrar/categoria" className="text-decorator-none">
        <Button
          variant="contained"
          color="secondary"
          className="btnAdicionarProduto"
        >
          <AddCircleIcon/>
        </Button>
      </Link>
    {
      categoria.map(categoria =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Categoria
            </Typography>
            <Typography variant="h5" component="h2">
             {categoria.ambiente}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/atualizar/categoria/${categoria.id_categoria}`} className="text-decorator-none">
                <Box mx={1}>
                <Link to= {`/atualizar/categoria/${categoria.id_categoria}`} className="text-decorator-none cursor">
                  <Button variant="contained" className="btn-color" size='small' color="primary" >
                    atualizar
                  </Button>
                  </Link>
                </Box>
              </Link>
              <Link to={`/deletar/categoria/${categoria.id_categoria}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaCategorias;