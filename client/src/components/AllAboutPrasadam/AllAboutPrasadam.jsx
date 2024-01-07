import * as React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsPraying } from '@fortawesome/free-solid-svg-icons'
import Theme from '../Navbar/Theme/AppTheme';
import { ThemeProvider } from '@emotion/react';
import Typography from '@mui/material/Typography';
import Prasadam from './Prasadam';

const Div = styled('div')({
  color: 'darkslategray',
  background: `linear-gradient(135deg, white, ${Theme.palette.primary.light}, ${Theme.palette.primary.main})`,
  padding: 8,
  borderRadius: 4,
  margin: 'auto',
  width: '70%',
  '@media (min-width: 600px)': {
    width: '30%',
  },
});
const AllAboutPrasadam = () => {
  return (
    <Box>
      <ThemeProvider theme={Theme}>
        <Stack direction="column" spacing={2} marginTop={2}>
          <Typography variant="h6" sx={{ textAlign: 'center', width: '100%' }}>
            <Div>
              <div style={{ marginRight: '5px', display: 'inline' }}>
                All About Prasadam
              </div>
              <FontAwesomeIcon icon={faHandsPraying} />
            </Div>
          </Typography>
          <Prasadam />
        </Stack>
      </ThemeProvider>
    </Box>
  )
}

export default AllAboutPrasadam
