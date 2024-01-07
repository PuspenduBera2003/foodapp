import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../contexts/Cart/CartContext'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import AvatarGroup from '@mui/material/AvatarGroup';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import Theme from '../Navbar/Theme/AppTheme'
import { ThemeProvider } from '@emotion/react';
import EmptyCart from './EmptyCart';
import SnackBar from '../SnackBar/SnackBar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const CartCardTop = () => {
    const location = useLocation();

    let isAtCart = false;
    if (location.pathname === '/cart') {
        isAtCart = true
    }

    const cartContext = useContext(CartContext);
    const { cartValue, deleteAllFromCart } = cartContext;

    const [currentCart, setCurrentCart] = useState(null);
    const [items, setItems] = useState(0)

    useEffect(() => {
        const storedCart = parseInt(localStorage.getItem('cartItems'), 10);
        setItems(storedCart);
        const itemsInCart = JSON.parse(localStorage.getItem('currentCart'));
        setCurrentCart(itemsInCart);
    }, [cartValue]);
    return (
        <>
            <SnackBar />
            {
                isAtCart ? '' :
                    !items ?
                        <ThemeProvider theme={Theme}>
                            <EmptyCart />
                        </ThemeProvider>
                        :
                        <div style={{ display: 'flex', justifyContent: 'center', position: 'sticky', top: 70, zIndex: 100 }}>
                            <Card sx={{ width: '80%', padding: 2, borderRadius: 5, background: 'linear-gradient(135deg, #a768de, white)' }}
                            >
                                <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <AvatarGroup max={3}>
                                        {
                                            currentCart.map((item, index) => (
                                                <Avatar alt={item.food} src={item.imageURL} key={index} />
                                            ))
                                        }
                                    </AvatarGroup>
                                    <div>
                                        <Button
                                            aria-label='delete cart items'
                                            color='secondary'
                                            size='large'
                                            sx={{ color: 'primary', marginRight: 0.2 }}
                                            onClick={deleteAllFromCart}
                                        >
                                            <DeleteIcon />
                                        </Button>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/cart'>
                                            <Button color='secondary' size='large' sx={{ color: 'primary' }} >
                                                <ShoppingCartIcon />
                                            </Button>
                                        </Link>
                                    </div>
                                </Stack>
                            </Card>
                        </div>
            }
        </>
    )
}

export default CartCardTop
