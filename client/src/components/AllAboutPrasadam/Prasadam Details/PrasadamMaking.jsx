import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PrasadamMakingImage from '../../images/Prasadam/prasadam_making.jpg';
import ExpandMore from './utils/ExpandMore';

const PrasadamMaking = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{ maxWidth: 345 , margin: 'auto' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={PrasadamMakingImage}
                title="Prasadam Making"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    How to prepare Prasad for Krishna?
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                    Cleanliness is next to godliness, so the kitchen should be kept very clean. Since the food is to be offered to Krishna, the supreme enjoyer, one should not taste anything before offering it.
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
                        The most essential ingredients are love and devotion, so while cooking one should remember that one is cooking for the happiness of Krishna. Listening to devotional songs or kirtans helps to create a nice meditative mood in the kitchen.
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

export default PrasadamMaking
