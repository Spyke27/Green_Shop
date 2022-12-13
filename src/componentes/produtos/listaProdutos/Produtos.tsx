import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Theme,
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Produtos.css";
import Mesa from "./mesa.jpg";
import Mais from "./mais.svg";
import Cart from "./cart.svg";
import { useSelector } from "react-redux";
import TokenState from "../../../store/tokens/tokenReducer";
import { Link, useNavigate } from "react-router-dom";
import { busca } from "../../../services/Service";
import Produtos from "../../../model/Produto";

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

  return (
    <>
      <Link to="/produtos/cadastrar" className="text-decorator-none">
        <Button
          variant="contained"
          color="secondary"
          className="btnAdicionarProduto"
        >
          <img src={Mais}/>
        </Button>
      </Link>
      <Box className="container">
        {produtos.map((produto) => (
            <Card className="cardProduto">
              <CardMedia
                className="fotoCardProduto"
                component="img"
                width="100%"
                image={produto.foto}
                alt="foto produto"
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


                <Box className="btnCard" mb={1.5}>
                <Link
                  to={`/produtos/cadastrar/${produto.id_produto}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" className="btnAtualizar marginLeft" size="small">
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/produtos/deletar/${produto.id_produto}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" className="btnDeletar">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>


              </CardActions>
            </Card>
        ))}
      </Box>
    </>
  );
}
export default ListarProdutos;
