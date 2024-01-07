import React from "react";
import FoodContext from "./FoodContext";

const FoodState = (props) => {

    const host = process.env.REACT_APP_HOST_SERVER;

    // Get n Number of random foods
    const getRandomFoods = async (number) => {
        // API call
        const url = `${host}/api/food/random/${number}`
        const response = await fetch(url, {
            method: "POST",
        });
        
        // Showing foods at Client Side
        const json = await response.json()
        return json;
    }

    // Search Foods By Type
    const getFoodsByType = async (type) => {
        // API call
        const url = `${host}/api/food/${type}`
        const response = await fetch(url, {
            method: "GET",
        });
        
        // Showing foods at Client Side
        const json = await response.json()
        return json;
    }

    // Search Foods By Food ID
    const getFoodsById = async (id) => {
        // API call
        const url = `${host}/api/food/id/${id}`
        const response = await fetch(url, {
            method: "GET",
        });
        
        // Showing foods at Client Side
        const json = await response.json()
        return json;
    }

    // Search any food from the navbar
    const getFood = async(food) => {
        // API call
        const url = `${host}/api/food/search`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({food})
        });
        // Showing foods at client side
        const json = await response.json()
        return json;
    }

    return (
        <FoodContext.Provider value={{ getRandomFoods, getFoodsByType, getFood, getFoodsById }}>
            {props.children}
        </FoodContext.Provider >
    )

}

export default FoodState;