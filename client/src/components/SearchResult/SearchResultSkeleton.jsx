import React from 'react'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Grid from '@mui/material/Grid'
import FoodsIndividualSkeleton from '../FoodsIndividual/FoodsIndividualSkeleton'

const SearchResultSkeleton = () => {
    const skeleton = ['a', 'b', 'c', 'd']
    return (
        <Box margin={1} mx={2}>
            <Skeleton variant='text' sx={{ fontSize: '1.5rem', marginBottom: 1 }} width={'25%'} />
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 9, md: 12 }}
                padding={1}
                justifyContent="center"
                alignItems="center"
            >
                {
                    skeleton.map((index) => (
                        <Grid item xs={2} sm={3} md={3} key={index}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <FoodsIndividualSkeleton skeletonWidth={250} />
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default SearchResultSkeleton
