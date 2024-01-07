import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FoodContext from '../../contexts/Foods/FoodContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Theme from '../Navbar/Theme/AppTheme'
import { ThemeProvider } from '@emotion/react';
import ReactPlayer from 'react-player/youtube'
import FoodsIndividual from '../FoodsIndividual/FoodsIndividual';
import SearchResultSkeleton from './SearchResultSkeleton';
import WarningIcon from '@mui/icons-material/Warning';
import Chip from '@mui/material/Chip'

const SearchResults = () => {
    const { search } = useLocation();

    const queryParams = new URLSearchParams(search);
    const food = queryParams.get('food');

    const foodContext = useContext(FoodContext);
    const { getFood } = foodContext;

    const [foods, setFoods] = useState(null);
    const [nonVeg, setNonVeg] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foodByQueries = async () => {
            setLoading(true);
            setNonVeg(false);
            const response = await getFood(food);
            setLoading(false);
            if (!response.success && response.errorcode === 'NVGSRCH') {
                setNonVeg(true);
                return;
            }
            setFoods(response.food);
        }
        foodByQueries();

    }, [food, getFood])

    return (
        <ThemeProvider theme={Theme}>
            <div>
                {
                    loading ?
                        <SearchResultSkeleton />
                        :
                        nonVeg ?
                            <Box width={'95vw'} display={'flex'} alignItems={'center'} justifyContent={'center'} margin={2} py={1.5}>
                                <ReactPlayer url='https://www.youtube.com/shorts/GLYO3s5wrVE' controls width={200} />
                            </Box>
                            :
                            <Box margin={2}>
                                <Typography variant='h5' color='primary' fontWeight={'bold'}>Search Results For: {food}</Typography>
                                {
                                    foods.length === 0 ?
                                        <Box marginTop={2}>
                                            <Chip icon={<WarningIcon />} label="No Result Found!!" color="warning" variant="outlined" clickable />
                                        </Box>
                                        :
                                        <Grid
                                            container
                                            spacing={{ xs: 2, md: 3 }}
                                            columns={{ xs: 2, sm: 9, md: 12 }}
                                            padding={1}
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            {foods.map((item) => (
                                                <Grid item xs={2} sm={3} md={3} key={item._id}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                        <FoodsIndividual food={item} boxWidth={{ xs: 300, sm: 200, md: 250 }} buttonColor={'primary'} />
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                }
                            </Box>
                }
            </div>
        </ThemeProvider>
    );
};

export default SearchResults;