import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Theme from '../Navbar/Theme/AppTheme';
import IndianFood from '../images/Food Types/Indian/indian_main.jpg'
import ChineseFood from '../images/Food Types/Chinese/chinese_main.jpg'
import SnacksFood from '../images/Food Types/Snacks/snacks_main.jpg'
import FuchkaFood from '../images/Food Types/Fuchka/fuchka_main.jpg'
import SweetFood from '../images/Food Types/Sweets/sweets_main.jpg'
import Drinks from '../images/Food Types/Drinks/drinks_main.jpg'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Div = styled('div')(() => ({
    background: `linear-gradient(135deg, ${Theme.palette.primary.light}, white)`,
    padding: Theme.spacing(1),
    color: Theme.palette.primary.dark,
    ":hover": {
        opacity: 0.8,
        color: Theme.palette.primary.main,
        transform: "scale3d(1.1, 1.1, 1.1)",
        borderRadius: 10
    },
    borderRadius: 5
}));

const categories = [
    { id: 'indian', name: 'Indian', src: IndianFood },
    { id: 'chinese', name: 'Chinese', src: ChineseFood },
    { id: 'snacks', name: 'Snacks', src: SnacksFood },
    { id: 'fuchka', name: 'Fuchka', src: FuchkaFood },
    { id: 'sweet', name: 'Sweets', src: SweetFood },
    { id: 'drinks', name: 'Drinks', src: Drinks },
];

const FoodTypes = () => {
    return (
        <Stack direction="row" spacing={{ xs: 2, sm: 3, md: 6 }} sx={{ marginLeft: '10px' }}>
            {categories.map((category) => (
                <Link key={category.id} to={`/category/${category.id}`} style={{ textDecoration: 'none' }}>
                    <Div>
                        <Stack direction="column" spacing={1}>
                            <Avatar alt={category.name} src={category.src} sx={{ width: 60, height: 60 }} />
                            <Typography variant='p' sx={{ textAlign: 'center' }}>{category.name}</Typography>
                        </Stack>
                    </Div>
                </Link>
            ))}
        </Stack>
    )
}

export default FoodTypes
