import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import "./Produtos.css"
import Mesa from "./mesa.jpg"
import Cart from "./cart.svg"


function Produtos(){
return (
<>
<Box className="container">
    <Box>
    <Card  className="cardProduto">
      <CardMedia className="fotoCard" component="img" width="100%" image={Mesa} alt="perfil" />
      <CardContent>
        <Typography variant="h5" component="div">Mesa Super Soft</Typography>
        <Typography className="cardCategoria">Móveis</Typography>
        <Typography variant="body2">
          Mesa amadeirada super sofisticada para todos os ambientes
        </Typography>
      </CardContent>
      <CardActions className="socialPerfil">
        <Button size="small" className="btnComprar">Comprar</Button>
        <Button size="small" className="btnCarrinho">Adicionar <img src={Cart} alt="" /></Button>
      </CardActions>
    </Card>
    </Box>    
</Box>
</>
)
}
export default Produtos;
