import React, { useEffect } from "react";
import './Home.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import { green, pink } from '@mui/material/colors';
import { Box } from '@mui/material';
import { fontSize, height } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { lightGreen } from "@material-ui/core/colors";
import Carousel from "./slideshow/SlideShow";
import { countries } from "./slideshow/Data"
import { useNavigate } from "react-router-dom";
import TokenState from "../../store/tokens/tokenReducer";
import { useSelector } from "react-redux";
import ProductCard from "./carousel/carousel";


const area_externa = require('./img/area_externa.png');
const jardim = require('./img/jardim.png');
const cozinha = require('./img/cozinha.png')
const salalazer = require('./img/salalazer.png')

function Home() {

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>

                {<Carousel images={countries} />}

            </Grid>


            <Grid className="espaco" container direction='row' justifyContent='center' alignItems='center' >

                <Stack className='avatar2' spacing={5} direction='row'>

                    <Avatar sx={{ width: 55, height: 55, bgcolor: "white" }}>
                        <img className="icones1" width={43} height={43} src="https://cdn-icons-png.flaticon.com/512/372/372754.png" />
                    </Avatar>

                    <Avatar sx={{ width: 55, height: 55, bgcolor: "white" }}>
                        <img className="icones1" width={43} height={43} src="https://seeklogo.com/images/W/whatsapp-logo-112413FAA7-seeklogo.com.png" alt="forma de pagamento" />
                    </Avatar>

                    <Avatar sx={{ width: 55, height: 55, bgcolor: "white" }}>
                        <img className="icones1" width={48} height={48} src="https://cdn-icons-png.flaticon.com/512/3076/3076631.png" alt="forma de pagamento" />
                    </Avatar>

                    <Avatar sx={{ width: 50, height: 50, bgcolor: "white" }}>
                        <img className="icones1" width={43} height={43} src="https://cdn-icons-png.flaticon.com/512/2298/2298267.png" alt="Primeira compra" />
                    </Avatar>

                </Stack>

            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Box className="font-cf">
                    <Typography variant="h4" gutterBottom  >
                        <div className="font">Produtos sustentáveis para o seu lar</div>
                    </Typography>
                </Box>

            </Grid>

            <ProductCard />

            <Grid className="espaço" container direction='row' justifyContent='center' alignItems='center' >

                <Stack className="avatar" direction='row'>

                    <Avatar className="iconesCate" sx={{ width: 230, height: 230, bgcolor: "white" }}>
            
                        <img className="icones2" width={223} height={223} src={salalazer} />
                    
                    </Avatar>

                    <Avatar className="iconesCate" sx={{ width: 230, height: 230, bgcolor: "white" }}>
                        <img className="icones2" width={223} height={223} src={cozinha} alt="forma de pagamento" />

                    </Avatar>

                    <Avatar className="iconesCate" sx={{ width: 230, height: 230, bgcolor: "white" }}>
                        <img className="icones2" width={223} height={223} src={area_externa} alt="área externa"
                        />
                    </Avatar>

                    <Avatar className="iconesCate" sx={{ width: 230, height: 230, bgcolor: "white" }}>
                        <img className="icones2" width={223} height={223} src={jardim} alt="jardim" />
                    </Avatar>

                </Stack>

            </Grid>

        </>

    );

}
export default Home