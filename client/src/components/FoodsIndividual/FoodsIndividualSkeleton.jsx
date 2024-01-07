import React from 'react'
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const FoodsIndividualSkeleton = (props) => {
    const { skeletonWidth } = props;
    return (
        <Card sx={{ width: skeletonWidth, background: 'linear-gradient(to right, #ffffff, #e4d8f0, #e7d2fa)' }}>
            <Stack direction='column' gap={1}>
                <Skeleton variant='rectangular' width={skeletonWidth} height={skeletonWidth} />
                <Skeleton variant='rectangular' sx={{ fontSize: '1.1rem', marginTop: 2, marginBottom: 1, marginLeft: 1, borderRadius: 1 }} width={'60%'} />
                <Skeleton variant='rectangular' sx={{ fontSize: '0.9rem', marginLeft: 1, marginBottom: 0, borderRadius: 1 }} width={'15%'} />
                <Stack direction='row' gap={3} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Skeleton variant='text' sx={{fontSize: '2rem'}} width={'40%'}></Skeleton>
                    <Skeleton variant='text' sx={{fontSize: '2rem'}} width={'30%'}></Skeleton>
                </Stack>
            </Stack>
        </Card>
    )
}

export default FoodsIndividualSkeleton