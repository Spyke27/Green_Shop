import { Button, Grid, Link, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import "./sobreNos.css";

import Ronaldo from "./img/Ronaldo.png";
import Raquel from "./img/Raquel.png";
import Thomas from "./img/Thomas.png";
import Lucas from "./img/Lucas.png";
import Ivan from "./img/Ivan.png";
import Rejane from "./img/Rejane.png";
import Rodrigo from "./img/Rodrigo.png";
import Linkedin from "./img/linkedin-card.svg";
import Github from "./img/github-card.svg";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function SobreNos() {
  return (
    <>
      <Grid container className="containerSN2">
        <Grid item sm={6} direction="column">
          <div className="margin-text">
            <Typography variant="h3" className="sobreProjeto">
              sobre o projeto
            </Typography>
            <div className="barrinha2"></div>
            <Typography className="projetoTexto">
              A ONG Green Shop tem como objetivo principal ajudar a melhorar a
              qualidade de vida dos catadores de lixo na cidade do Rio de
              Janeiro. Fundada por um grupo de empresários preocupados com a
              situação dos catadores e com o impacto ambiental causado pelo lixo
              nas ruas da cidade, a ONG tem como principal atividade a coleta e
              reciclagem de lixo. 
            </Typography>
              <Typography className="projetoTexto">
              A ONG conta com uma equipe de profissionais
              altamente capacitados e dedicados, que trabalham diariamente para
              garantir que o lixo coletado seja devidamente separado e
              encaminhado para reciclagem. Além disso, a ONG oferece
              treinamentos e capacitações para os catadores, garantindo que eles
              tenham as habilidades necessárias para desempenhar seu trabalho de
              maneira eficiente e segura. 
              </Typography>

              <Typography className="projetoTexto">
              Os lucros obtidos pela ONG são
              totalmente revertidos para as atividades da organização,
              garantindo assim que os catadores tenham acesso a recursos e
              equipamentos de qualidade, além de benefícios sociais e programas
              de incentivo. A ONG também trabalha em parceria com outras
              organizações e empresas para garantir que sua missão seja cumprida
              de forma eficaz e sustentável.
              </Typography>
              
            <Typography className="projetoTexto">
              A ONG Green Shop tem um papel fundamental na manutenção da limpeza
              da cidade do Rio de Janeiro. Através da coleta e reciclagem de
              lixo, a ONG contribui para a redução do volume de lixo nas ruas,
              garantindo assim que a cidade seja mais limpa e agradável para se
              viver.
            </Typography>
            <Typography className="projetoTexto">
               Além disso, a ONG também trabalha para conscientizar a
              população sobre a importância da separação do lixo e da
              reciclagem, o que contribui para a redução da quantidade de lixo
              gerado. Dessa forma, a ONG contribui para a preservação do meio
              ambiente e para a melhoria da qualidade de vida dos moradores da
              cidade. 
            </Typography>
              <Typography className="projetoTexto">
              Outra forma como essa iniciativa ajuda a manter a cidade
              limpa é dando oportunidade de trabalho e renda para os catadores,
              o que ajuda a evitar o acúmulo de lixo nas ruas, e além disso, os
              catadores também passam a ter uma renda e uma profissão.
              </Typography>
          </div>
        </Grid>
        <Grid item sm={6}>
          <img
            src="https://reciclaje.com.co/wp-content/uploads/2018/03/Destacada-reciclador-asociado.jpg"
            alt="imagem1"
            className="imagem-sobreNos"
          />
        </Grid>
      </Grid>

      <Box className="desenvolvedores">
        <Typography variant="h4" className="textDesenvolvedores ">
          equipe desenvolvedora
        </Typography>
      </Box>

      <section>
        <ul className="ul-cards2">
          <li className="li-cards2">
            <Box className="boxPerfil2">
              <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                <CardMedia
                  className="fotoCard2"
                  component="img"
                  width="100%"
                  image={Thomas}
                  alt="perfil"
                />
                <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Thomás Almeida
                    </Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://github.com/mastho19"
                        target="_blank"
                      >
                        <img src={Github} width="35px" alt="Logo Github" />
                      </Link>
                    </li>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://www.linkedin.com/in/thomas-almeida-de-sousa/"
                        target="_blank"
                      >
                        <img src={Linkedin} width="35px" alt="Logo Linkedin" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
            </Box>
          </li>
          <li className="li-cards2">
            <Box className="boxPerfil2">
              <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                <CardMedia
                  className="fotoCard2"
                  component="img"
                  width="100%"
                  image={Raquel}
                  alt="perfil"
                />
                <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Raquel Resende
                    </Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://github.com/RaquelResende"
                        target="_blank"
                      >
                        <img src={Github} width="35px" alt="Logo Github" />
                      </Link>
                    </li>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://www.linkedin.com/in/raquelpintoresende/"
                        target="_blank"
                      >
                        <img src={Linkedin} width="35px" alt="Logo Linkedin" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
            </Box>
          </li>
          <li className="li-cards2">
            <Box className="boxPerfil2">
              <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                <CardMedia
                  className="fotoCard2"
                  component="img"
                  width="100%"
                  image={Rodrigo}
                  alt="perfil"
                />
                <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Rodrigo Eufrasio
                    </Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://github.com/Spyke27"
                        target="_blank"
                      >
                        <img src={Github} width="35px" alt="Logo Github" />
                      </Link>
                    </li>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://www.linkedin.com/in/rodrigo-daniell/"
                        target="_blank"
                      >
                        <img src={Linkedin} width="35px" alt="Logo Linkedin" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
            </Box>
          </li>
          <li className="li-cards2">
            <Box className="boxPerfil2">
              <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                <CardMedia
                  className="fotoCard2"
                  component="img"
                  width="100%"
                  image={Ronaldo}
                  alt="perfil"
                />
                <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Ronaldo Freire
                    </Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://github.com/Ronald0Freire"
                        target="_blank"
                      >
                        <img src={Github} width="35px" alt="Logo Github" />
                      </Link>
                    </li>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://www.linkedin.com/in/ronaldo-freire/"
                        target="_blank"
                      >
                        <img src={Linkedin} width="35px" alt="Logo Linkedin" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
            </Box>
          </li>
          <li className="li-cards2">
            <Box className="boxPerfil2">
              <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                <CardMedia
                  className="fotoCard2"
                  component="img"
                  width="100%"
                  image={Lucas}
                  alt="perfil"
                />
                <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Lucas El Honais
                    </Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://github.com/LucasMarques97"
                        target="_blank"
                      >
                        <img src={Github} width="35px" alt="Logo Github" />
                      </Link>
                    </li>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://www.linkedin.com"
                        target="_blank"
                      >
                        <img src={Linkedin} width="35px" alt="Logo Linkedin" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
            </Box>
          </li>
          <li className="li-cards2">
            <Box className="boxPerfil2">
              <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                <CardMedia
                  className="fotoCard2"
                  component="img"
                  width="100%"
                  image={Ivan}
                  alt="perfil"
                />
                <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      José Ivanilson
                    </Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://github.com/ivanilsonsillva"
                        target="_blank"
                      >
                        <img src={Github} width="35px" alt="Logo Github" />
                      </Link>
                    </li>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://www.linkedin.com/in/ivanilson-sillva/"
                        target="_blank"
                      >
                        <img src={Linkedin} width="35px" alt="Logo Linkedin" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
            </Box>
          </li>
          <li className="li-cards2">
            <Box className="boxPerfil2">
              <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                <CardMedia
                  className="fotoCard2"
                  component="img"
                  width="100%"
                  image={Rejane}
                  alt="perfil"
                />
                <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Rejane Queiroz
                    </Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://github.com/rejanequeiroz"
                        target="_blank"
                      >
                        <img src={Github} width="35px" alt="Logo Github" />
                      </Link>
                    </li>
                    <li className="logo-redes">
                      <Link
                        rel="stylesheet"
                        href="https://www.linkedin.com/in/reijane-queiroz/"
                        target="_blank"
                      >
                        <img src={Linkedin} width="35px" alt="Logo Linkedin" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
            </Box>
          </li>
        </ul>
      </section>
    </>
  );
}

export default SobreNos;
