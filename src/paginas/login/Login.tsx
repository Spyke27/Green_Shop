import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./login.css";
function Login() {
  return (
    <>
      <Grid container justifyContent="center" alignContent="center" className="fullScreen">
        <Grid sm={6} item  className="loginStyle">
          <Typography variant="h3" align="center">Entrar</Typography>
          <form>
            <TextField
              variant="outlined"
              label="Usuário"
              fullWidth
              margin="normal"
            >
            </TextField>
            <TextField
              variant="outlined"
              label="Password"
              fullWidth
              margin="normal"
              
            >
            </TextField>
            <Box textAlign="center">
              <Link to='/' className="text-decorator-none">
                <Button variant="outlined" >Login</Button>
              </Link>
            </Box>
          </form>
          <Box className="flex">
            <Typography>Não tem cadastro ?</Typography>
            <Link to='/cadastro' className="linkStyle">
            <Typography>Cadastre-se !</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;