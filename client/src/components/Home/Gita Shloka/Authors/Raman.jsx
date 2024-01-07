import React from 'react'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import RamanImage from '../../../images/Author/Ramanujacharya.jpg'

const Raman = (props) => {
    const { author } = props;
    return (
        <div>
            <Typography variant='h6' fontWeight='bold' marginBottom={3}>
                Author: {author.author}
            </Typography>
            <Chip
                avatar={<Avatar alt="Sri Ramanuja" src={RamanImage} />}
                label="Explaination"
                variant="outlined"
                color='primary'
                clickable
            />
            <div style={{ overflowY: 'auto', maxHeight: 210, marginTop: 10 }}>
                <Typography style={{ textAlign: 'justify' }}>
                    {author.et}
                </Typography>
            </div>
        </div>
    )
}

export default Raman
