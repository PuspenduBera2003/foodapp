import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OfferingsToKrishnaImage from '../../images/Prasadam/offering_to_krishna_2.jpeg'
import ExpandMore from './utils/ExpandMore';
import PrayerToSrlaPrabhupada from './OfferingToKrishna/PrayerToSrlaPrabhupada';
import PrayerToLordChaitanya from './OfferingToKrishna/PrayerToLordChaitanya';
import PrayerToLordKrishna from './OfferingToKrishna/PrayerToLordKrishna';

const OfferingsToKrishna = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{ maxWidth: 400, margin: 'auto' }}>
            <CardMedia
                sx={{ height: 200 }}
                image={OfferingsToKrishnaImage}
                title="Offerings to Krishna"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Offerings to Krishna
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                    A portion of each preparation is arranged in Krishna's personal plate and bowl. Fresh water is offered in his cup. A basil leaf is placed on each dish.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                    Beginners can chant the Mahamantra Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare three times.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                    For a more elaborate offering the following prayers are chanted three times each while ringing the bell. Although this offering is made to Krishna, it is done through the spiritual master, Srila Prabhupada, so we begin with a prayer at his lotus feet:
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
                    <PrayerToSrlaPrabhupada />
                    <PrayerToLordChaitanya />
                    <PrayerToLordKrishna />
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{ color: 'blue' }}>Share</Button>
                    <Button size="small" sx={{ color: 'blue' }}>Learn More</Button>
                </CardActions>
            </Collapse>
        </Card>
    )
}

export default OfferingsToKrishna