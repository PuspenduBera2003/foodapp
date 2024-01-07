import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FoodContext from '../../contexts/Foods/FoodContext';
import FoodWithDescriptionCard from './FoodWithDescriptionCard';
import FoodWithDescriptionSkeleton from './FoodWithDescriptionSkeleton';
import InvalidSearch from './InvalidSearch';

const FoodWithDescription = () => {

    const foodContext = useContext(FoodContext);
    const { getFoodsById } = foodContext;

    const { foodID } = useParams();

    const [foodDetails, setFoodDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foodDetails = async () => {
            try {
                setLoading(true);
                const response = await getFoodsById(foodID);
                if (!response.success || !response.food) {
                    setFoodDetails(null);
                } else {
                    setFoodDetails(response.food);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        foodDetails();
    }, [foodID, getFoodsById])

    return (
        <div>
            {
                loading ?
                    <FoodWithDescriptionSkeleton />
                    : !foodDetails
                        ? <InvalidSearch />
                        : <FoodWithDescriptionCard food={foodDetails} />
            }
        </div>
    )
}

export default FoodWithDescription