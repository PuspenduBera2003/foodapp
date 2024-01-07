import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FoodContext from '../../contexts/Foods/FoodContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FoodsIndividual from '../FoodsIndividual/FoodsIndividual';
import FoodsIndividualSkeleton from '../FoodsIndividual/FoodsIndividualSkeleton';

const FoodsFromHomePageBanner = () => {
    const { categoryID } = useParams();

    const foodContext = useContext(FoodContext);
    const { getFoodsByType } = foodContext;

    const skeleton = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    const [foods, setFoods] = useState(null);
    useEffect(() => {
        const GetFoods = async () => {
            setFoods(null);
            const food = await getFoodsByType(categoryID);
            setFoods(food.food);
        }
        GetFoods();
    }, [categoryID, getFoodsByType])
    return (
        <Box sx={{ flexGrow: 1, }}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, sm: 8, md: 12 }}
                padding={1}
                justifyContent="center"
                alignItems="center"
            >
                {!foods ?
                    skeleton.map((index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <FoodsIndividualSkeleton skeletonWidth={300} />
                            </Box>
                        </Grid>
                    ))
                    : foods.map((item) => (
                        <Grid item xs={2} sm={4} md={4} key={item._id}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <FoodsIndividual food={item} boxWidth={300} buttonColor={'secondary'} />
                            </Box>
                        </Grid>
                    ))}
            </Grid>
        </Box>
    )
}

export default FoodsFromHomePageBanner
