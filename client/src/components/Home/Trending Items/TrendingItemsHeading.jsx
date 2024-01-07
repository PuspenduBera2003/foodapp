import React from 'react'
import Theme from '../../Navbar/Theme/AppTheme';
import { ThemeProvider } from '@emotion/react';
import Chip from '@mui/material/Chip';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const TrendingItemsHeading = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Chip icon={<TrendingUpIcon />} label="Popular Foods" style={{fontWeight: 'bold', maxWidth: '150px', marginTop: 5}} clickable />
        </ThemeProvider>
    )
}

export default TrendingItemsHeading
