import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Theme,
  Typography,
  makeStyles,
  createStyles
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Produtos.css";
import Mesa from "./mesa.jpg";
import Cart from "./cart.svg";
import { useSelector } from "react-redux";
import TokenState from "../../../store/tokens/tokenReducer";
import { Link, useNavigate } from "react-router-dom";
import { busca } from "../../../services/Service";
import Produtos from "../../../model/Produto";
import DetalhesProduto from "../detalhesProduto/DetalhesProduto";
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';

function ListarProdutos() {
  const [produtos, setProdutos] = useState<Produtos[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado!");
      navigate("/login");
    }
  }, [token]);

  async function getProduto() {
    await busca("/produtos/all", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }
  useEffect(() => {
    getProduto();
  }, [produtos.length]);

  function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '5px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }),
  );

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon onClick={handleClose}/>
      </Box>
      <DetalhesProduto/>
    </div>
  );

  return (
    <>
      <Link to="/produtos/cadastrar" className="text-decorator-none">
        <Button
          variant="contained"
          color="secondary"
          className="btnAdicionarProduto"
        >
          Novo Produto
        </Button>
      </Link>
      <Box className="container">
        {produtos.map((produto) => (
          <Link to="">
            <Card className="cardProduto" onClick={handleOpen}>
              <CardMedia
                className="fotoCardProduto"
                component="img"
                width="100%"
                image={produto.foto}
                alt="perfil"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {produto.nome}
                </Typography>
                <Typography className="cardCategoria">
                  {produto.descricao}
                  <strong className="cardPreco">{produto.valor}</strong>
                </Typography>
              </CardContent>
              <CardActions className="socialPerfil">
                <Button size="small" className="btnComprar">
                  Comprar
                </Button>
                <Button size="small" className="btnCarrinho">
                  Adicionar <img src={Cart} alt="" />
                </Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Box>
      <div>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </>
  );
}
export default ListarProdutos;
