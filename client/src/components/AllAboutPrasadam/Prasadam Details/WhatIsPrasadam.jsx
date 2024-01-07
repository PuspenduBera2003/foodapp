import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Prasadam from '../../images/Prasadam/prasadam.png'

const WhatIsPrasadam = () => {
    return (
        <Card sx={{ maxWidth: 345 , margin: 'auto' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={Prasadam}
                title="Offerings to Krishna"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    What is Prasadam?
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{textAlign: 'justify'}}>
                    Prasadam means "mercy" and ISKCON devotees use this word to describe pure vegetarian food that is offered to Lord Krishna. The food offered to the deities in the temple is known as Maha-Prasadam.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{color: 'blue'}}>Share</Button>
                <Button size="small" sx={{color: 'blue'}}>Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default WhatIsPrasadam
