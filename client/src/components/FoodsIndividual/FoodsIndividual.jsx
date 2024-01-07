import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Theme from '../Navbar/Theme/AppTheme';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import CartContext from '../../contexts/Cart/CartContext';
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal';
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
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

const FoodsIndividual = (props) => {
    const cartContext = useContext(CartContext);
    const { addToCart } = cartContext;
    const snackbar = useContext(SnackBarContext);
    const { setSnackbarDetails, handleSnackBarOpen } = snackbar;

    const [addToCartDisabled, setAddToCartDisabled] = useState(false);
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

    const { food, boxWidth, buttonColor } = props;

    const AddToCart = () => {
        if (!food.availibility) {
            return;
        }
        food.availibility = food.availibility - 1;
        addToCart(food);
    }

    useEffect(() => {
        !food.availibility && setAddToCartDisabled(true);
    }, [food.availibility])

    return (
        <div>
            <Card sx={{ maxWidth: boxWidth, background: 'linear-gradient(to right, #ffffff, #e4d8f0, #e7d2fa)' }}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/food/${food._id}`}>
                    <CardMedia
                        sx={{ height: boxWidth, width: boxWidth }}
                        image={food.imageURL}
                        title={food.food}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {food.food}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            &#8377;{food.price}
                        </Typography>
                    </CardContent>
                </Link>
                <CardActions>
                    <Box sx={{ width: boxWidth, display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
                        <Button
                            variant='outlined'
                            size="small"
                            color={buttonColor}
                            endIcon={<AddShoppingCartIcon />}
                            onClick={AddToCart}
                            disabled={addToCartDisabled}
                        >
                            Add to Cart
                        </Button>
                        <Button onClick={handleModalOpen} variant='outlined' size="small" color={buttonColor} startIcon={<ShareIcon />}>Share</Button>
                    </Box>
                </CardActions>
            </Card>



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
                            <FontAwesomeIcon icon={faFacebookMessenger} color='#006AFF' style={{fontSize: '1.3rem', position: 'relative', top: 4}} />
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

export default FoodsIndividual