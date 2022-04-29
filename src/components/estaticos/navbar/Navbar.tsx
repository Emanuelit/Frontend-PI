import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar className="tool">
                    <Box className='cursor logo'>
                        <Typography variant="h5" color="inherit">
                            Cultivive
                        </Typography>
                    </Box>

                    <Box className="icons" display="flex" justifyContent="start">
                        <Box mx={1} className='cursor icon1'>
                            <Link className="links" to="/">
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                            </Link>
                        </Box>
                        
                        <Box mx={1} className='cursor icon2'>
                            <Typography variant="h6" color="inherit">
                                Produtos
                            </Typography>
                        </Box>
                        
                        <Box mx={1} className='cursor icon3'>
                        <Link className="links" to="/contato">
                            <Typography variant="h6" color="inherit">
                                Contato
                            </Typography>
                        </Link>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor icon4'>
                                <Typography variant="h6" color="inherit">
                                    Login
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;