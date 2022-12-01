import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';

function Footer() {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" style={{ backgroundColor: "#00a470", height: "250px" }}>


                <Grid item xs={12} sm={4}>
                    <Box paddingTop={1} display='flex' alignItems='center' justifyContent='center'>
                        <Typography variant="subtitle1" gutterBottom style={{ color: "white" }}>ENTRE EM CONTATO</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Box paddingTop={1} display='flex' alignItems='center' justifyContent='center'>
                        <Typography variant="subtitle1" gutterBottom style={{ color: "white" }}>REDES SOCIAIS</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="subtitle1" gutterBottom style={{ color: "white" }}>TRABALHE CONOSCO</Typography>
                    </Box>
                    <Box>
                        <form>

                        </form>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Box display="flex" flexDirection='row' alignItems="center" justifyContent="center" >
                        <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon style={{ fontSize: 40, color: "white" }} />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon style={{ fontSize: 40, color: "white" }} />
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                        </a>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4} direction="column" alignItems="flex-start">
                    <Box display='flex'>
                        <form >
                            <Box display='flex' flexDirection='column' justifyContent="center" >
                                <input type='text' placeholder='Email'></input>


                                <select>
                                    <option>Selecione a categoria</option>

                                </select>


                                <input type='text' placeholder='Mensagem'></input>


                                <button>ENVIAR</button>
                            </Box>


                        </form>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Box >
                        <Box paddingTop={2} >
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 GreenShope. Todos os direitos reservados</Typography>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default Footer;