import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import YouTube from 'react-youtube';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import KrishnaImage from '../images/krishnaflute2.jpg';

export default function EmptyCart() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVideoLoading, setIsVideoLoading] = useState(true);
    const playerRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            // Pause the video
            if (playerRef.current) {
                playerRef.current.pauseVideo();
            }
        } else {
            // Play the video
            if (playerRef.current) {
                playerRef.current.playVideo();
            }
        }

        setIsPlaying(!isPlaying);
    };


    return (
        <div className={`${isPlaying && 'position-sticky'}`} style={{ top: 70, zIndex: 100, width: '80%', margin: 'auto' }}>
            <Card sx={{ display: 'flex', height: '76px', width: '100%', justifyContent: 'space-between', background: 'linear-gradient(135deg, #a768de, white)' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <CardContent>
                        <Typography variant="h6" fontWeight={'bold'} color={'white'}>
                            Radhe Radhe
                        </Typography>
                        <Typography variant="subtitle1" color={'#ffffff99'} component="div" fontWeight={'bold'}>
                            राधे राधे
                        </Typography>
                    </CardContent>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconButton aria-label="play/pause" onClick={handlePlayPause}>
                        {
                            !isPlaying ?
                                <PlayArrowIcon sx={{ height: 38, width: 38 }} color='primary' />
                                : isVideoLoading ?
                                    <CircularProgress color="primary" />
                                    : <PauseIcon sx={{ height: 38, width: 38 }} color='primary' />
                        }
                    </IconButton>
                </Box>
                <YouTube
                    videoId="4rURry0UFB8"
                    opts={{
                        playerVars: {
                            autoplay: 0,
                            controls: 0,
                            showinfo: 0,
                            modestbranding: 1,
                            fs: 0,
                            rel: 0,
                        },
                    }}
                    onReady={(event) => (playerRef.current = event.target)}
                    onStateChange={(event) => {
                        if (event.data === -1) {
                            // Video is loding
                            setIsVideoLoading(true)
                        } else if (event.data === 2) {
                            // Video is paused
                            setIsPlaying(false);
                            setIsVideoLoading(false);
                        } else if (event.data === 1) {
                            // Video is playing
                            setIsPlaying(true);
                            setIsVideoLoading(false)
                        } else if (event.data === 0) {
                            // Video has ended
                            setIsPlaying(false);
                            setIsVideoLoading(false)
                        }
                    }}
                    style={{ display: 'none' }}
                />
                <img src={KrishnaImage} alt="Live from space album cover" style={{ width: 85 }} />
            </Card>
        </div>
    );
}
