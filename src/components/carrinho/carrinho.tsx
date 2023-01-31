import { Box, Button, Grid, Typography,Card,
    CardActions,
    CardContent,
    CardMedia } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Produtos from '../../model/Produto';
import { busca } from '../../service/Service';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Carrinho = () => {

    const [produtos, setProdutos] = useState<Produtos[]>([]);
    const [contador, setContador] = useState(0)
    const [valorTotal, setValorTotal] = useState(0)

    const aumentarQnt = () => {
      setContador(contador + 1 )
    }

    const diminuirQnt = () => {
      setContador(contador - 1)
    }

    async function getProduto() {
        await busca("/produtos/all", setProdutos, {
        });
      }

      useEffect(() => {
        getProduto();
      }, [produtos.length]);

    return (
        <>
        <Typography variant='h3' align='center'>Carrinho de Compras</Typography>
        
        {produtos.map((produto) => (
            <Grid container style={{padding:'25px'}} alignItems='center' >
              <Grid item sm={4}>
                <img src={produto.foto} style={{width:'150px'}} />
              </Grid>

              <Grid item sm={2}>
                <Typography>R$ {produto.valor}</Typography>
              </Grid>

              <Grid item sm={6}>
                <Button onClick={aumentarQnt}>
                    <AddCircleOutlineIcon/>
                </Button>

                {contador}

                <Button onClick={diminuirQnt}>
                    <RemoveIcon/>
                </Button>
                
                <Button>
                    <DeleteOutlineIcon/>
                </Button>
              </Grid>
            </Grid>
        ))}
        <Grid container>
            <Grid item sm={8}>
                <Button variant='contained' style={{background:'#00A470', color:'#fff'}}>Finalizar Compra</Button>
            </Grid>
            <Grid item sm={4}>
                <Typography>Valor Total:R$ {valorTotal}</Typography>
            </Grid>
        </Grid>

        </>
    )
}

export default Carrinho