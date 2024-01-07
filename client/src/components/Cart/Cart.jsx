import React, { useContext, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import { ThemeProvider } from '@emotion/react'
import Theme from '../Navbar/Theme/AppTheme'
import Card from '@mui/material/Card'
import CartItemIndividual from './CartItemIndividual'
import CartContext from '../../contexts/Cart/CartContext'
import EmptyCart from './EmptyCart'

const Cart = () => {

    const cartContext = useContext(CartContext);
    const { cartValue } = cartContext;

    const [currentCart, setCurrentCart] = useState(null);
    const [totalCartValue, setTotalCartValue] = useState(0);

    useEffect(() => {
        const itemsInCart = JSON.parse(localStorage.getItem('currentCart'));
        setCurrentCart(itemsInCart);
        let tempCartValue = 0;
        if (itemsInCart) {
            itemsInCart.forEach((jsonObject) => {
                tempCartValue += parseInt(jsonObject.totalPrice, 10);
            })
        }
        setTotalCartValue(tempCartValue)
    }, [cartValue])

    return (
        <ThemeProvider theme={Theme}>
            <Stack direction='column' padding={2}>
                <Typography variant='h4' textAlign={'center'} fontWeight={'bold'}>
                    Your Cart
                </Typography>
                {
                    totalCartValue ?
                        currentCart.map((item, index) => (
                            <CartItemIndividual key={index} food={item} />
                        ))
                        : <EmptyCart />
                }
                {
                    totalCartValue ?
                        <Card className='p-2 d-flex justify-content-between align-items-center flex-wrap gap-2'>
                            <Button variant='contained' color='success'>
                                Deliver to: <br />
                                Home
                            </Button>
                            <Chip sx={{ fontFamily: 'Sans-serif', fontSize: '13px' }} label={`TOTAL CART VALUE : ₹${totalCartValue}`} color='primary' />
                            <Button variant='contained' color='primary'>
                                Buy All
                            </Button>
                        </Card>
                        : ''
                }
            </Stack>
        </ThemeProvider>
    )
}

export default Cart