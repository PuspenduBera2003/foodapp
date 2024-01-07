import React from 'react'
import { Card, Grid, Skeleton, CardActions } from '@mui/material'

const FoodWithDescriptionSkeleton = () => {
    const skeletonwidth = ['100%', '100%', '100%', '57%']
    return (
        <Card sx={{ margin: 2, backgroundColor: '#60516c' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={6}>
                    <Skeleton variant='rectangular' height={450} />
                </Grid>
                <Grid item xs={4} sm={4} md={6} sx={{ backgroundColor: '#6d4a8c' }}>
                    <CardActions disableSpacing sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                        <Skeleton variant='circular' height={40} width={40} sx={{ marginRight: 1 }} />
                        <Skeleton variant='circular' height={40} width={40} />
                    </CardActions>
                    <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'30%'} />
                    <Skeleton variant='text' sx={{ fontSize: '1.7rem' }} width={'10%'} />
                    <Skeleton variant='rectangular' sx={{ borderRadius: 2 }} height={30} width={125} />
                    <Card sx={{ margin: 1, marginLeft: 0, padding: 1, backgroundColor: '#6d4a8c' }}>
                        <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'30%'} />
                        {
                            skeletonwidth.map((width, index) => (
                                <Skeleton variant='text' sx={{ fontSize: '1.4rem' }} width={width} key={index} />
                            ))
                        }
                    </Card>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Skeleton variant='text' sx={{fontSize: '2.2rem'}} width={'25%'} />
                    </div>
                </Grid>
            </Grid>
        </Card>
    )
}

export default FoodWithDescriptionSkeleton
