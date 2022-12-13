import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import {Box} from '@mui/material';
import './DeletarProduto.css';
import Produtos from '../../../model/Produto';
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import TokenState from "../../../store/tokens/tokenReducer";

function DeletarProduto() {

  let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    )
    const [produto, setProduto] = useState<Produtos>()

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setProduto, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
          navigate('/produtos')
            deleteId(`/produtos/deletar/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            alert('Produto deletada com sucesso');
          }
        
          function nao() {
            navigate('/produtos')
          }
   
  return (
    <>
      <Box m={2} className="containerDeletar">
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Produto:
              </Typography>
              <Typography color="textSecondary" >
              {produto?.nome}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="outlined" className="btnDeletarSim" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao} variant="outlined" className="btnDeletarNao" size='large' color="secondary">
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
export default DeletarProduto;