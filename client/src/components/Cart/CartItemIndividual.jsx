import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CartItemIndividualImage from './CartItemIndividualImage';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CartContext from '../../contexts/Cart/CartContext';

const CartItemIndividual = (props) => {

    const cartContext = useContext(CartContext);
    const { deleteOneItemFromCart, increaseItem, decreaseItem } = cartContext;

    const [decreaseDisabled, setDecreaseDisable] = useState(false);
    const [increaseDisabled, setIncreaseDisable] = useState(false);

    const { food } = props;

    const deleteAnItemFromCart = () => {
        deleteOneItemFromCart(food);
    }

    const increaseQuantity = () => {
        increaseItem(food);
    }

    const decreaseQuantity = () => {
        decreaseItem(food);
    }

    useEffect(() => {
        if (food.count <= 1 || food.availibility <= food.count) {
            if (food.count <= 1)
                setDecreaseDisable(true)
            else
                setIncreaseDisable(true)
        }
        else {
            setDecreaseDisable(false)
            setIncreaseDisable(false)
        }
    }, [food.count, food.availibility])

    return (
        <Card sx={{ marginY: 1, padding: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
            <CartItemIndividualImage food={food} />
            <ButtonGroup variant="contained" aria-label="Decrement, Current, Increment button group">
                <IconButton disabled={decreaseDisabled} aria-label='decrease quantity' color="primary" size='large' onClick={decreaseQuantity}>
                    <RemoveIcon />
                </IconButton>
                <Button disabled sx={{ fontWeight: 'bold', color: 'black', fontFamily: 'Sans-serif' }} aria-label="total foods">
                    {food.count}
                </Button>
                <IconButton disabled={increaseDisabled} aria-label='increase quantity' color="primary" size='large' onClick={increaseQuantity}>
                    <AddIcon />
                </IconButton>
            </ButtonGroup>
            <Card sx={{ width: 80, marginLeft: 2, textAlign: 'center', padding: 0.5 }}>
                <Typography color='primary' variant="h6" fontWeight={'bold'}>
                    {food.count}N
                </Typography>
                <Typography color='primary' fontWeight={'bold'}>
                    &#8377;{food.totalPrice}
                </Typography>
            </Card>
            <CardActions>
                <IconButton aria-label='delete this item' color="primary" size='large' onClick={deleteAnItemFromCart}>
                    <DeleteOutlineIcon />
                </IconButton>
                <Button variant='contained'>
                    Buy
                </Button>
            </CardActions>
        </Card>
    )
}

export default CartItemIndividual