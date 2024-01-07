import React from 'react'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import GambirImage from '../../../images/Author/Gambirananda.jpg'

const Gambir = (props) => {
  const { author } = props;
  return (
    <div>
      <Typography variant='h6' fontWeight='bold' marginBottom={3}>
        Author: {author.author}
      </Typography>
      <Chip
        avatar={<Avatar alt="Swami Gambirananda" src={GambirImage} />}
        label="Explaination"
        variant="outlined"
        color='primary'
        clickable
      />
      <div style={{ overflowY: 'auto', maxHeight: 200 }}>
        <Typography style={{ textAlign: 'justify' }} marginTop={2}>
          {author.et}
        </Typography>
      </div>
    </div>
  )
}

export default Gambir