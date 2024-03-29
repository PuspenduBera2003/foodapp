import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import IndianFood from '../images/Food Types/Indian/indian_main.jpg'
import ChineseFood from '../images/Food Types/Chinese/chinese_main.jpg'
import SnacksFood from '../images/Food Types/Snacks/snacks_main.jpg'
import FuchkaFood from '../images/Food Types/Fuchka/fuchka_main.jpg'
import SweetFood from '../images/Food Types/Sweets/sweets_main.jpg'
import Drinks from '../images/Food Types/Drinks/drinks_main.jpg'
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import Theme from '../Navbar/Theme/AppTheme'

const images = [
    {
        url: IndianFood,
        id: 'indian',
        title: 'Indian',
        width: '16%',
    },
    {
        url: ChineseFood,
        id: 'chinese',
        title: 'Chinese',
        width: '17%',
    },
    {
        url: SnacksFood,
        id: 'snacks',
        title: 'Snacks',
        width: '16%',
    },
    {
        url: FuchkaFood,
        id: 'fuchka',
        title: 'Fuchka',
        width: '17%',
    },
    {
        url: SweetFood,
        id: 'sweet',
        title: 'Sweets',
        width: '17%',
    },
    {
        url: Drinks,
        id: 'drinks',
        title: 'Drinks',
        width: '17%',
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 100,
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function FoodTypes2() {
    return (
        <ThemeProvider theme={Theme}>
            <Box sx={{ minWidth: 800, width: '100%' }}>
                {images.map((image) => (
                    <Link key={image.id} to={`/category/${image.id}`} style={{ textDecoration: 'none' }}>
                        <ImageButton
                            focusRipple
                            style={{
                                width: image.width,
                            }}
                        >
                            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                            <ImageBackdrop className="MuiImageBackdrop-root" />
                            <Image>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    sx={{
                                        position: 'relative',
                                        p: 4,
                                        pt: 2,
                                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                    }}
                                >
                                    {image.title}
                                    <ImageMarked className="MuiImageMarked-root" />
                                </Typography>
                            </Image>
                        </ImageButton>
                    </Link>
                ))}
            </Box>
        </ThemeProvider>
    );
}
