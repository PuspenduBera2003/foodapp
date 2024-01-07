import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Theme from '../Navbar/Theme/AppTheme'
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CakeIcon from '@mui/icons-material/Cake';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QuizIcon from '@mui/icons-material/Quiz';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" textAlign={'center'} marginTop={1}>
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000/">
                Aharada
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Box
                component="footer"
                sx={{
                    pt: 3,
                    pb: 1,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}>
                <Box
                    className='d-flex flex-wrap justify-content-evenly' sx={{ rowGap: 1 }}
                >
                    <Box className='d-flex flex-column' sx={{ rowGap: 1 }}>
                        <Link color="primary" style={{ textDecoration: 'none' }} href="http://localhost:3000/">
                            <HomeIcon />
                            <Typography variant="body1" display={'inline'} marginLeft={0.5}>
                                Home
                            </Typography>
                        </Link>
                        <Link color="primary" style={{ textDecoration: 'none' }} href="http://localhost:3000/">
                            <ContactPageIcon />
                            <Typography variant="body1" display={'inline'} marginLeft={0.5}>
                                Contact Us
                            </Typography>
                        </Link>
                        <Link color="primary" style={{ textDecoration: 'none' }} href="http://localhost:3000/">
                            <CurrencyRupeeIcon />
                            <Typography variant="body1" display={'inline'} marginLeft={0.5}>
                                Help Us
                            </Typography>
                        </Link>
                    </Box>
                    <Box className='d-flex flex-column' sx={{ rowGap: 1 }}>
                        <Link color="primary" style={{ textDecoration: 'none' }} href="http://localhost:3000/all-about-prasadam">
                            <CakeIcon />
                            <Typography variant="body1" display={'inline'} marginLeft={0.5}>
                                All About Prasadam
                            </Typography>
                        </Link>
                        <Link color="primary" style={{ textDecoration: 'none' }} href="http://localhost:3000/all-about-prasadam">
                            <DinnerDiningIcon />
                            <Typography variant="body1" display={'inline'} marginLeft={0.5}>
                                All Prasadam
                            </Typography>
                        </Link>
                        <Link color="primary" style={{ textDecoration: 'none' }} href="http://localhost:3000/all-about-prasadam">
                            <TipsAndUpdatesIcon />
                            <Typography variant="body1" display={'inline'} marginLeft={0.5}>
                                Suggest Us a Prasadam
                            </Typography>
                        </Link>
                    </Box>
                    <Box className='d-flex flex-column' sx={{ rowGap: 1 }}>
                        <Link color="primary" style={{ textDecoration: 'none' }} href="http://localhost:3000/all-about-prasadam">
                            <AutoStoriesIcon />
                            <Typography variant="body1" display={'inline'} marginLeft={0.5}>
                                Read ShremadBhagavat Gita
                            </Typography>
                        </Link>
                        <Link color="primary" style={{ textDecoration: 'none' }} href="http://localhost:3000/all-about-prasadam">
                            <DinnerDiningIcon />
                            <Typography variant="body1" display={'inline'} marginLeft={0.5}>
                                All Prasadam
                            </Typography>
                        </Link>
                        <Link color="primary" style={{ textDecoration: 'none' }} href="http://localhost:3000/all-about-prasadam">
                            <RiceBowlIcon />
                            <Typography variant="body1" display={'inline'} marginLeft={0.5}>
                                Previous Orders
                            </Typography>
                        </Link>
                    </Box>
                    <Box className='d-flex flex-column' sx={{ rowGap: 1 }}>
                        <Link color="primary" style={{ textDecoration: 'none' }} href="http://localhost:3000/all-about-prasadam">
                            <FavoriteIcon />
                            <Typography variant="body1" display={'inline'} marginLeft={0.5}>
                                Your Favourites
                            </Typography>
                        </Link>
                        <Link color="primary" style={{ textDecoration: 'none' }} href="http://localhost:3000/all-about-prasadam">
                            <LocalShippingIcon />
                            <Typography variant="body1" display={'inline'} marginLeft={0.5}>
                                Meet Our Delivery Partners
                            </Typography>
                        </Link>
                        <Link color="primary" style={{ textDecoration: 'none' }} href="http://localhost:3000/all-about-prasadam">
                            <QuizIcon />
                            <Typography variant="body1" display={'inline'} marginLeft={0.5}>
                                Frequenty Asked Questions
                            </Typography>
                        </Link>
                    </Box>
                </Box>
                <Stack direction='row' gap={2.5} justifyContent={'center'} marginTop={1}>
                    <Link href="https://www.facebook.com" target='_blank' >
                        <FontAwesomeIcon icon={faFacebook} color='#316FF6' />
                    </Link>
                    <Link href="https://www.instagram.com" target='_blank' >
                    <FontAwesomeIcon icon={faInstagram} color='#CD486B' />
                    </Link>
                    <Link href="https://www.twitter.com" target='_blank' >
                    <FontAwesomeIcon icon={faXTwitter} color='black' />
                    </Link>
                    <Link color="primary" href="https://www.youtube.com" target='_blank' >
                    <FontAwesomeIcon icon={faYoutube} color='#CD201F' />
                    </Link>
                </Stack>
                <Copyright />
            </Box>
        </ThemeProvider>
    );
}

export default Footer