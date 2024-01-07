import React, { useContext, useState } from "react";
import CartContext from "./CartContext";
import SnackBarContext from "../SnackBar/SnackBarContext";

const CartState = (props) => {
    const [cartValue, setCartValue] = useState(0);

    const snackBarContext = useContext(SnackBarContext);
    const { setSnackbarDetails, handleSnackBarOpen } = snackBarContext;

    const addToCart = (food) => {
        const cartItems = parseInt(localStorage.getItem('cartItems'), 10)
        if (cartItems) {
            localStorage.setItem('cartItems', cartItems + 1);
        } else {
            localStorage.setItem('cartItems', 1);
        }
        setCartValue(cartValue + 1);

        // Check if the food is already in the cart
        const currentCart = JSON.parse(localStorage.getItem('currentCart'));
        if (currentCart) {
            const existingFoodIndex = currentCart.findIndex((item) => item._id === food._id);

            if (existingFoodIndex !== -1) {
                // If the food is already in the cart, update the count and price
                const updatedCart = [...currentCart];
                updatedCart[existingFoodIndex] = {
                    ...updatedCart[existingFoodIndex],
                    count: (updatedCart[existingFoodIndex].count || 1) + 1,
                    totalPrice: (updatedCart[existingFoodIndex].count + 1) * food.price,
                };

                localStorage.setItem('currentCart', JSON.stringify(updatedCart));

            } else {
                // If the food is not in the cart, add it with a count of 1 and calculate the total price
                const newCart = [
                    ...currentCart,
                    {
                        ...food,
                        count: 1,
                        totalPrice: 1 * food.price,
                    },
                ];
                localStorage.setItem('currentCart', JSON.stringify(newCart));
            }
        } else {
            // In case User clear the localstorage or logged in for the first time
            const newCart = [
                {
                    ...food,
                    count: 1,
                    totalPrice: 1 * food.price,
                },
            ];
            localStorage.setItem('currentCart', JSON.stringify(newCart));
        }

        setSnackbarDetails({
            message: `${food.food} Added To Cart`,
            color: 'success',
        });

        handleSnackBarOpen();
    };

    const deleteOneItemFromCart = (food) => {
        const cartItems = parseInt(localStorage.getItem('cartItems'), 10);
        setCartValue(cartItems - 1);
        localStorage.setItem('cartItems', cartItems - food.count)

        const currentCart = JSON.parse(localStorage.getItem('currentCart'));
    
        // Filter out the item to be deleted
        const updatedCart = currentCart.filter(item => item._id !== food._id);
    
        // Update localStorage and state
        localStorage.setItem('currentCart', JSON.stringify(updatedCart));

        setSnackbarDetails({
            message: `${food.food} Deleted From Cart`,
            color: 'success',
        });

        handleSnackBarOpen();
    };
    

    const deleteAllFromCart = () => {
        setCartValue(cartValue - 1);
        localStorage.setItem('cartItems', 0)
        setSnackbarDetails({
            message: 'Cart Cleared',
            color: 'success'
        })
        localStorage.setItem('currentCart', JSON.stringify([]));
        handleSnackBarOpen();
    }

    const increaseItem = (food) => {
        const cartItems = parseInt(localStorage.getItem('cartItems'), 10);
        setCartValue(cartValue + 1);
        localStorage.setItem('cartItems', cartItems + 1);

        const currentCart = JSON.parse(localStorage.getItem('currentCart'));
        const existingFoodIndex = currentCart.findIndex((item) => item._id === food._id);

        if (existingFoodIndex !== -1) {
            // If the food is already in the cart, update the count and price
            const updatedCart = [...currentCart];
            updatedCart[existingFoodIndex] = {
                ...updatedCart[existingFoodIndex],
                count: (updatedCart[existingFoodIndex].count || 1) + 1,
                totalPrice: (updatedCart[existingFoodIndex].count + 1) * food.price,
            };
            localStorage.setItem('currentCart', JSON.stringify(updatedCart));
        }
    }

    const decreaseItem = (food) => {
        const cartItems = parseInt(localStorage.getItem('cartItems'), 10);
        setCartValue(cartValue - 1);
        localStorage.setItem('cartItems', cartItems - 1);

        const currentCart = JSON.parse(localStorage.getItem('currentCart'));
        const existingFoodIndex = currentCart.findIndex((item) => item._id === food._id);

        if (existingFoodIndex !== -1) {
            // If the food is already in the cart, update the count and price
            const updatedCart = [...currentCart];
            updatedCart[existingFoodIndex] = {
                ...updatedCart[existingFoodIndex],
                count: (updatedCart[existingFoodIndex].count || 1) - 1,
                totalPrice: (updatedCart[existingFoodIndex].count - 1) * food.price,
            };
            localStorage.setItem('currentCart', JSON.stringify(updatedCart));
        }
    }

    return (
        <CartContext.Provider value={{ cartValue, addToCart, deleteAllFromCart, deleteOneItemFromCart, increaseItem, decreaseItem }}>
            {props.children}
        </CartContext.Provider >
    )

}

export default CartState;