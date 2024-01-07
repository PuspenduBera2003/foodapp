import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SkeletonBackground = { background: 'linear-gradient(to bottom, #ebd7fc, #d7beed, #be96e0)' }

const TrendingItemsSkeleton = () => {
    return (
        <Stack spacing={2} direction="row" marginBottom='5px' padding={1}>
            {[...Array(10).keys()].map(index => (
                <Stack direction="column" key={index} bgcolor='#f9f2ff' padding={1} borderRadius={1}>
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} style={SkeletonBackground} />
                    <Skeleton variant="rectangular" width={233} height={200} style={SkeletonBackground} />
                    <Stack direction="row" spacing={1}>
                        <Skeleton height={60} width='70%' style={SkeletonBackground} />
                        <Skeleton height={60} width='40%' style={SkeletonBackground} />
                    </Stack>
                </Stack>
            ))}

        </Stack>
    )
}

export default TrendingItemsSkeleton
