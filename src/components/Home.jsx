import React from 'react'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { Videos } from './'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import VideoLink from './VideoLink'

const Home = () => {

    const [videoId, setVideoId] = useState(null)

    const [videos, setVideos] = useState([]);
        
    useEffect(() => {
        fetchFromAPI(`${videoId}`).then((data) => setVideos(data.formats))
    }, [videoId])

    return (
        <Box
            sx={{
                // height: '100vh',
                background: 'url(/background.jpg) no-repeat center center/cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                pt: '20px'
            }}
        >
            <VideoLink setVideoId={setVideoId}/>
            <Box mt={2} />
            <Videos videos={videos} />
        </Box>
    )
}

export default Home