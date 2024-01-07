import React, { useContext, useEffect, useRef, useState } from 'react'
import FoodContext from '../../../contexts/Foods/FoodContext';
import Stack from '@mui/material/Stack';
import TrendingItemsHeading from './TrendingItemsHeading';
import TrendingItemsIndividual from './TrendingItemsIndividual';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import sideScroll from '../../utils/sideScroll';
import TrendingItemsSkeleton from './TrendingItemsSkeleton';
import './TrendingItems.css'

const Button1Style = { position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', height: '60px', width: '60px', borderRadius: '50%', zIndex: 2 }

const Button2Style = { position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', height: '60px', width: '60px', borderRadius: '50%', zIndex: 2 }

const TrendingItems = () => {
    const contentWrapper = useRef(null);

    const foodContext = useContext(FoodContext);
    const { getRandomFoods } = foodContext;

    const [food, setFood] = useState(null);
    const [loading, setLoading] = useState(true);
    const [leftButtonVisible, setLeftButtonVisible] = useState(false);
    const [rightButtonVisible, setRightButtonVisible] = useState(true);

    const isAtBeginning = () => {
        const wrapper = contentWrapper.current;
        return wrapper.scrollLeft === 0;
    };

    const isAtEnd = () => {
        const wrapper = contentWrapper.current;
        return wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 1;
    };

    const handleScroll = () => {
        const atBeginning = isAtBeginning();
        const atEnd = isAtEnd();
        setLeftButtonVisible(!atBeginning);
        setRightButtonVisible(!atEnd);
    };

    const bothButtonVisible = rightButtonVisible && leftButtonVisible

    useEffect(() => {
        const sizeOfBanner = process.env.REACT_APP_TRENDING_ITEM_BANNER_SIZE;
        const fetchData = async () => {
            const data = await getRandomFoods(sizeOfBanner);
            setFood(data.food);
            setLoading(false);
        }
        fetchData();
    }, [getRandomFoods])
    return (
        <Stack direction="column" spacing={1} style={{ marginLeft: '10px' }} >
            <TrendingItemsHeading />
            <div style={{ position: 'relative', overflow: 'hidden', maxWidth: '100vw' }}>
                {!loading && leftButtonVisible && <Button
                    onClick={() => {
                        sideScroll(contentWrapper.current, 25, 100, -10);
                    }}
                    style={Button1Style}
                    color='secondary'
                >
                    <ArrowBackIosIcon fontSize='large' style={{position: 'relative', left: 5}} />
                </Button>}
                <div
                    ref={contentWrapper}
                    onScroll={handleScroll}
                    style={{
                        overflowX: 'auto', maxWidth: '98vw', marginBottom: '5px'
                    }}
                    className={`blurred-stack ${bothButtonVisible ? 'both-blur' : ''} ${leftButtonVisible ? 'left-blur' : ''} ${rightButtonVisible ? 'right-blur' : ''}`}
                >
                    {
                        loading ?
                            <TrendingItemsSkeleton /> :
                            <Stack spacing={2} direction="row" sx={{ width: '2650px' }} padding={1} paddingBottom={0}>
                                {food.map(index => (
                                    <TrendingItemsIndividual key={index._id} food={index} />
                                ))}
                            </Stack>
                    }
                </div>
                {!loading && rightButtonVisible && <Button
                    onClick={() => {
                        sideScroll(contentWrapper.current, 25, 100, 10);
                    }}
                    style={Button2Style}
                    color='secondary'
                >
                    <ArrowForwardIosIcon fontSize='large' />
                </Button>}
            </div>
        </Stack>
    )
}

export default TrendingItems
