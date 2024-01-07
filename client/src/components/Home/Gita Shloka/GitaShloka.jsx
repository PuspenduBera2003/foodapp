import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Skeleton from '@mui/material/Skeleton'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GeetaContext from '../../../contexts/Gita/GitaContext';
import getRandomInteger from '../../utils/getRandomInteger';
import NumberOfSlokaInaChapter from './NumberOfSlokaInaChapter';
import Image from '../../images/KrishnaArjun.jpg';
import Theme from '../../Navbar/Theme/AppTheme';
import { ThemeProvider } from '@emotion/react';
import Raman from './Authors/Raman';
import Rams from './Authors/Rams';
import Gambir from './Authors/Gambir';

const GitaShloka = () => {
    const geeta = useContext(GeetaContext);
    const { getShloka } = geeta;
    const [sloka, setSloka] = useState(null);
    const [value, setValue] = React.useState('one');
    const skeletonWidths = ['25%', '28%', '30%'];
    const explanationSkeletonWidths = ['90%', '90%', '90%', '90%', '90%', '40%'];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const ch = getRandomInteger(18);
        const sh = NumberOfSlokaInaChapter(ch);
        const GetShloka = async () => {
            const shloka = await getShloka(ch, sh);
            setSloka(shloka);
        }
        GetShloka();
    }, [getShloka])
    return (
        <ThemeProvider theme={Theme}>
            <Card sx={{
                display: 'flex', justifyContent: 'space-between', '@media (max-width: 1200px)': {
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                },
            }} style={{ margin: '10px', marginTop: 0, background: 'linear-gradient(135deg, #ffffff, #d6bbed, #bd9cdb)' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', width: 350 }}>
                        {!sloka ?
                            <>
                                <Skeleton variant="rectangular" sx={{ fontSize: '2rem', marginBottom: 0.5, width: '70%' }} />
                                <Skeleton variant="rectangular" sx={{ fontSize: '2rem', width: '50%' }} />
                            </>
                            : <Typography component="div" variant="h5" marginBottom={1} color={Theme.palette.primary.main} fontWeight='bold'>
                                &#2384; NAMO BHAGVATE VASHUDEVAYA
                            </Typography>}
                        {!sloka ?
                            <Skeleton variant="text" sx={{ fontSize: '2rem', width: '55%' }} />
                            : <Typography variant="h6" color="text.secondary" component="div" marginBottom={1} textAlign='justify'>
                                Chapter: {sloka.chapter}, Verse: {sloka.verse}
                            </Typography>}
                        {!sloka ?
                            <>
                                <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '1.5rem', width: '95%' }} />
                            </>
                            : <Typography variant="subtitle1" component="div" textAlign='justify'>
                                Sloka: {sloka.slok}
                            </Typography>}
                        {!sloka ?
                            <>
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '1rem', width: '80%' }} />
                            </>
                            : <Typography variant="subtitle2" component="div" >
                                Transliteration: {sloka.transliteration}
                            </Typography>}
                    </CardContent>
                </Box>
                <Box sx={{ width: 375 }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: 400 }}>
                            {
                                !sloka ?
                                    <Box sx={{display: 'flex', flexDirection: 'row'}} marginBottom={2.5}>
                                        {skeletonWidths.map((width, index) => (
                                            <Skeleton
                                                key={index}
                                                variant="rectangular"
                                                sx={{ fontSize: '1.5rem', position: 'relative', top: 10, margin: 'auto', width }}
                                            />
                                        ))}
                                    </Box>
                                    : <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Sri Ramanuja" value="one" wrapped />
                                        <Tab label="Swami Ramsukhdas" value="two" wrapped />
                                        <Tab label="Swami Gambirananda" value="three" wrapped />
                                    </TabList>
                            }

                        </Box>
                        <Box maxWidth={530}>
                            {
                                !sloka ?
                                    <>
                                        <Skeleton variant='text' sx={{ fontSize: '2.5rem', position: 'relative', left: 15, width: '48%' }} />
                                        <Skeleton variant='text' sx={{ fontSize: '2.5rem', position: 'relative', left: 15, borderRadius: 6.5, width: '25%' }} />
                                        {explanationSkeletonWidths.map((width, index) => (
                                            <Skeleton
                                                key={index}
                                                variant="rectangular"
                                                sx={{ fontSize: '1rem', position: 'relative', left: 15, marginBottom: 1, width }}
                                            />
                                        ))}
                                    </>
                                    : <>
                                        <TabPanel value="one">
                                            <Raman author={sloka.raman} />
                                        </TabPanel>
                                        <TabPanel value="two">
                                            <Rams author={sloka.rams} />
                                        </TabPanel>
                                        <TabPanel value="three">
                                            <Gambir author={sloka.gambir} />
                                        </TabPanel>
                                    </>
                            }
                        </Box>
                    </TabContext>
                </Box>
                {
                    !sloka ?
                        <Skeleton variant='rectangular' sx={{width: 300, height: 405}} />
                        :
                        <CardMedia
                            component="img"
                            sx={{ width: 300 }}
                            image={Image}
                            alt="Live from space album cover"
                        />
                }
            </Card>
        </ThemeProvider>
    )
}

export default GitaShloka
