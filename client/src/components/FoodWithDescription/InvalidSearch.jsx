import React from 'react'
import { Card, Grid, CardMedia, Typography, Button } from '@mui/material'
import Theme from '../Navbar/Theme/AppTheme'
import { ThemeProvider } from '@emotion/react';
import Image from '../images/krishnaplanet.jpg'
import WarningIcon from '@mui/icons-material/Warning';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const InvalidSearch = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Card sx={{ margin: 2, backgroundColor: '#6d4a8c' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={6}>
                        <CardMedia
                            component="img"
                            height="450"
                            src={Image}
                            alt='Shree Krishna with planets'
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                            <WarningIcon color='error' style={{ fontSize: 50 }} />
                            <Typography variant='h5' textAlign={'center'} fontWeight={'bold'} color={'white'} marginTop={2}>
                                No Such Food Found!!! <br /> URL either broken or expired
                            </Typography>
                            <Link to='/'>
                                <Button color='info' variant='contained' sx={{ marginTop: 2 }}>
                                    <HomeIcon />
                                </Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </ThemeProvider>
    )
}

export default InvalidSearch
