import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Theme from '../../Navbar/Theme/AppTheme';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'
import CartContext from '../../../contexts/Cart/CartContext'
import Modal from '@mui/material/Modal';
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { ContentCopy, WhatsApp, FacebookRounded, Email, Telegram } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import CopyURL from '../../Share/CopyURL';
import SnackBarContext from '../../../contexts/SnackBar/SnackBarContext';
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

const TrendingItemsIndividual = (props) => {
    const cartContext = useContext(CartContext);
    const { addToCart } = cartContext;
    const snackbar = useContext(SnackBarContext);
    const { setSnackbarDetails, handleSnackBarOpen } = snackbar;

    const [addToCartDisabled, setAddToCartDisabled] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);

    const food = props.food;
    const name = food.food;
    const price = food.price;
    const image = food.imageURL;

    const domainName = process.env.REACT_APP_DOMAIN

    const AddToCart = () => {
        if (!food.availibility) {
            return;
        }
        food.availibility = food.availibility - 1;
        addToCart(food);
    }

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

    useEffect(() => {
        !food.availibility && setAddToCartDisabled(true);
    }, [food.availibility])

    return (
        <div>
            <Card sx={{ width: 260 }} style={{ background: 'linear-gradient(to bottom, #ebd7fc, #875aad, #875aad)' }}>
                <Link style={{ textDecoration: 'none' }} to={`/food/${food._id}`}>
                    <ThemeProvider theme={Theme}>
                        <CardHeader
                            title={name}
                            subheader={<span dangerouslySetInnerHTML={{ __html: `&#8377;${price}` }} />}
                            sx={{ color: '#8405f5' }}
                        />
                    </ThemeProvider>
                    <CardMedia
                        component="img"
                        height="194"
                        image={image}
                        alt={name}
                    />
                </Link>
                <CardActions>
                    <Button
                        variant="contained"
                        endIcon={<AddShoppingCartIcon />}
                        style={{ fontSize: '10px' }}
                        color='secondary'
                        onClick={AddToCart}
                        disabled={addToCartDisabled}
                    >
                        Add to Cart
                    </Button>
                    <Button variant="contained" startIcon={<ShareIcon />} style={{ marginLeft: '10px', fontSize: '10px' }} color='secondary' onClick={handleModalOpen}>
                        Share
                    </Button>
                </CardActions>
            </Card>


            {/* For Share Modal */}
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

export default TrendingItemsIndividual