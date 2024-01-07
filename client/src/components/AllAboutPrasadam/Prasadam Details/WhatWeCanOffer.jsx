import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OfferingsToKrishna from '../../images/Prasadam/offerings_to_krishna.png'
import ExpandMore from './utils/ExpandMore';


const WhatWeCanOffer = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{ maxWidth: 345 , margin: 'auto' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={OfferingsToKrishna}
                title="Offerings to Krishna"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    What can we offer to Krishna?
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                    Krishna explains in the Bhagavad-gita that "If someone offers me a leaf, a flower, fruit or water with love and devotion, I will accept it." Krishna does not accept meat, fish or eggs.
                </Typography>
                <CardActions disableSpacing>
                    <Button size="small" sx={{ color: 'blue' }}>Learn More</Button>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant='body2' color="text.secondary" sx={{ textAlign: 'justify' }}>
                        Onion, garlic and caffeine are also avoided as they disturb the mind and hence are not beneficial for meditation and spiritual life.Fresh, natural ingredients should be used as far as possible. Special attention should also be paid to all labels of items purchased in the supermarket: cheese may contain non-vegetarian rennet, some yogurts contain gelatin and many non-vegetarian products are hidden behind E-numbers, preservatives, flavors and colors.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{ color: 'blue' }}>Share</Button>
                    <Button size="small" sx={{ color: 'blue' }}>Learn More</Button>
                </CardActions>
            </Collapse>
        </Card>
    )
}

export default WhatWeCanOffer
