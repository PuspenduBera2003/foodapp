import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Grid, CardMedia, CardActions, IconButton, Typography, Chip, Button, Box, Stack, Modal, OutlinedInput, InputLabel, InputAdornment, FormControl } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Theme from '../Navbar/Theme/AppTheme'
import { ThemeProvider } from '@emotion/react';
import CategoryIcon from '@mui/icons-material/Category';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartContext from '../../contexts/Cart/CartContext';
import { ContentCopy, WhatsApp, FacebookRounded, Email, Telegram } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import CopyURL from '../Share/CopyURL';
import SnackBarContext from '../../contexts/SnackBar/SnackBarContext';
import { EmailShareButton, FacebookMessengerShareButton, FacebookShareButton, TelegramShareButton, WhatsappShareButton } from 'react-share';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: Theme.palette.primary.light,
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

const FoodWithDescriptionCard = (props) => {

    const cartContext = useContext(CartContext);
    const { addToCart } = cartContext;
    const snackbar = useContext(SnackBarContext);
    const { setSnackbarDetails, handleSnackBarOpen } = snackbar;

    const [openModal, setOpenModal] = useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);

    const domainName = process.env.REACT_APP_DOMAIN;

    const handleCopy = () => {
        CopyURL("foodURL");
        setSnackbarDetails(
            {
                message: 'Link Copied To Clipboard',
                color: 'success',
            }
        )
        handleSnackBarOpen();
    }

    const navigate = useNavigate();

    const { food } = props;

    const [disableAddToCart, setDisableAddToCart] = useState(false);

    const handleNavigate = () => {
        navigate(`/category/${food.type}`);
    }

    const handleAddToCart = () => {
        addToCart(food);
        food.availibility = food.availibility - 1;
        if (!food.availibility) {
            setDisableAddToCart(true);
        }
    }

    return (
        <div>
            <ThemeProvider theme={Theme}>
                <Card sx={{ margin: 2, backgroundColor: '#6d4a8c' }}>
                    <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm={4} md={6}>
                            <CardMedia
                                component="img"
                                height="475"
                                image={food.imageURL}
                                alt={food.food}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={6}>
                            <CardActions disableSpacing sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon style={{ color: 'white' }} />
                                </IconButton>
                                <IconButton style={{ color: 'white' }} aria-label="share" onClick={handleModalOpen}>
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>
                            <Typography variant='h5' fontWeight={'bold'} color={'white'} marginBottom={2} style={{ position: 'relative', left: 8 }}>
                                {food.food}
                            </Typography>
                            <Typography variant='h6' fontWeight={'bold'} color={'white'} marginBottom={0.5} style={{ position: 'relative', left: 8 }}>
                                &#8377;{food.price}
                            </Typography>
                            <Chip onClick={handleNavigate} sx={{ color: 'white' }} icon={<CategoryIcon style={{ color: 'white' }} />} label={food.type} variant='outlined' clickable style={{ position: 'relative', left: 8 }} />
                            <Card sx={{ margin: 1, marginLeft: 0, padding: 1, backgroundColor: '#6d4a8c' }}>
                                <Typography variant='h6' fontWeight={'bold'} color={'white'} marginBottom={0.5}>
                                    Description
                                </Typography>
                                <Typography variant='body1' color={'white'} textAlign={'justify'}>
                                    {food.description}
                                </Typography>
                            </Card>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='my-2'>
                                <Button startIcon={<AddShoppingCartIcon />} variant='contained' color='success' onClick={handleAddToCart} disabled={disableAddToCart}>
                                    Add To Cart
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
            </ThemeProvider>



            {/* for share modal */}
            <Modal
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormControl sx={{ width: '100%', margin: 'auto' }} variant="outlined">
                        <InputLabel htmlFor="foodURL">URL</InputLabel>
                        <OutlinedInput
                            id="foodURL"
                            type='text'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Copy Content"
                                        edge="end"
                                        onClick={handleCopy}
                                    >
                                        <ContentCopy />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="URL"
                            value={`${domainName}/food/${food._id}`}
                            disabled
                        />
                    </FormControl>
                    <Stack direction='row' spacing={5} className='mt-2'>
                        <EmailShareButton body={food.description} subject={`Aharada Offers ${food.food}`} url={`${domainName}/food/${food._id}`}>
                            <Email />
                        </EmailShareButton>
                        <WhatsappShareButton title={`Aharada Offers ${food.food}`} url={`${domainName}/food/${food._id}`}>
                            <WhatsApp sx={{ color: '#075e54' }} />
                        </WhatsappShareButton>
                        <FacebookShareButton hashtag='#aharada' url={`${domainName}/food/${food._id}`}>
                            <FacebookRounded sx={{ color: '#1877F2' }} />
                        </FacebookShareButton>
                        <FacebookMessengerShareButton title={`${food.food}`} appId='1767657160415323' url={`${domainName}/food/${food._id}`}>
                            <FontAwesomeIcon icon={faFacebookMessenger} color='#006AFF' style={{ fontSize: '1.3rem', position: 'relative', top: 4 }} />
                        </FacebookMessengerShareButton>
                        <TelegramShareButton title={`Aharada Offers ${food.food}`} url={`${domainName}/food/${food._id}`}>
                            <Telegram sx={{ color: '#0088cc', }} />
                        </TelegramShareButton>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}

export default FoodWithDescriptionCard
