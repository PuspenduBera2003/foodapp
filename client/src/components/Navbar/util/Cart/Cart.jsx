import React, { useContext, useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../../../contexts/Cart/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cartValue } = cartContext;

  const [items, setItems] = useState(0);

  useEffect(() => {
    const storedCartValue = localStorage.getItem('cartItems');
    if (storedCartValue !== null) {
      setItems(parseInt(storedCartValue, 10));
    }
  }, [cartValue]);

  return (
    <Link style={{ textDecoration: 'none', color: 'white' }} to='/cart'>
      <IconButton size="large" aria-label="show cart" color="inherit">
        <Badge badgeContent={items} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default Cart;