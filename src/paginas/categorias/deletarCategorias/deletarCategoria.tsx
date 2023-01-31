import React, { useEffect, useState } from 'react'
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './deletarCategoria.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../service/Service';
import Categoria from '../../../model/Categoria';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import TokenState from '../../../store/tokens/tokenReducer';

function DeletarTema() {
    let navigate = useNavigate();
    const { id_categoria } = useParams<{id_categoria: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    const [categoria, setCategoria] = useState<Categoria>()

    useEffect(() => {
        if (token == "") {
          toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id_categoria !== undefined){
            findById(id_categoria)
        }
    }, [id_categoria])

    async function findById(id_categoria: string) {
        buscaId(`/categorias/${id_categoria}`, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
          navigate('/categorias')
            deleteId(`/categorias/deletar/${id_categoria}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Tema deletado com sucesso', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined,
              });
          }
        
          function nao() {
            navigate('/categorias')
          }
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {categoria?.ambiente}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button  onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;