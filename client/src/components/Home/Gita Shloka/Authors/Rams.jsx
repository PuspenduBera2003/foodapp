import React from 'react'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import RamsImage from '../../../images/Author/Ramsukhdas.jpg'

const Rams = (props) => {
  const { author } = props;
  return (
    <div>
      <Typography variant='h6' fontWeight='bold' marginBottom={3}>
        Author: {author.author}
      </Typography>
      <Chip
        avatar={<Avatar alt="Swami Ramsukhdas" src={RamsImage} />}
        label="Explaination"
        variant="outlined"
        color='primary'
        clickable
      />
      <Typography style={{ textAlign: 'justify' }} marginTop={2}>
        {author.ht}
      </Typography>
    </div>
  )
}

export default Rams
