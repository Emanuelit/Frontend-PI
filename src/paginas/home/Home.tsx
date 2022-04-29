import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Produtos</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i0.wp.com/www.sabra.org.br/site/wp-content/uploads/2021/07/descubra-x-beneficios-da-agricultura-sustentavel-para-a-sociedade-20210609152644.jpg.jpg?w=800&ssl=1" alt="" width="800px" height="600px" />
                </Grid>
                <Grid xs={12} className='produtos'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;