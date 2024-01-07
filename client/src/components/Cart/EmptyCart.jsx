import React from 'react'
import { Card, Stack, Typography, CardMedia, Divider } from '@mui/material'
import EmptyCartImage from '../images/EmptyPlate.jpg'

const EmptyCart = () => {
    return (
        <div className='d-flex align-items-center justify-content-center mt-2'>
            <Card sx={{ maxWidth: 800 }}>
                <CardMedia
                    sx={{ height: 300, opacity: 0.4 }}
                    image={EmptyCartImage}
                    title="Empty Plate"
                />
                <Typography variant='h5' sx={{ position: 'relative', top: -180 }} color={'red'} fontWeight={'bold'} textAlign={'center'}>
                    Uh Oh!!! Your cart is empty. Please try adding something.
                </Typography>
                <Stack 
                divider={<Divider orientation="vertical" flexItem />}
                direction={'row'} 
                spacing={3} 
                sx={{ position: 'relative', top: -25 }}
                >
                    <Typography color={'green'} textAlign={'center'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        अन्नं ब्रह्मा रसो विष्णुः खादयेन्मांसमुच्चरन् । <br />
                        एवं ज्ञात्वा तु यो भुंक्ते सोऽन्नदोषैर्न लिप्यते ॥
                    </Typography>
                    <Typography color={'primary'} textAlign={'justify'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Food is Brahma, the essence in it is Vishnu, and the one who consumes (enjoys) it is Maheshwara the Lord Himself. If you know this, then any impurities in the food will not become a part of you
                    </Typography>
                </Stack>
            </Card>
        </div>
    )
}

export default EmptyCart