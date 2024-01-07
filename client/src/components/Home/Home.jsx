import React from 'react';
import Stack from '@mui/material/Stack';
import TrendingItems from './Trending Items/TrendingItems';
import GitaShloka from './Gita Shloka/GitaShloka';

const Home = () => {
    return (
        <Stack spacing={2} direction="column">
            <TrendingItems />
            <GitaShloka />
        </Stack>
    )
}

export default Home