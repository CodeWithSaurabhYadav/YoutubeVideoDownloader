import React from 'react'
import { Stack, Box, Typography } from '@mui/material'

const Videos = ({ videos }) => {

    if (!videos) return 'LOADING....'

    return (
        <Box>
            <Stack>
                <Typography
                    variant='subtitle2'
                    color='#FFF'
                    textAlign='center'
                    mt={2}
                >
                    To download video click on the 3-dot icon and then download.
                    <Typography
                        fontWeight='bold'
                        variant='h5'
                        color='red'
                    >
                        Refresh the page before downloading another video
                    </Typography>
                </Typography>
                <Box>
                    {
                        videos.map((item) => (
                            <Box key={item.itag}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <video controls type='media' className='video'>
                                        <source src={item?.url} type='video/mp4' />
                                    </video>
                                </Box>
                                <Typography
                                    variant='h4'
                                    display='flex'
                                    justifyContent='center'
                                    color='white'
                                >
                                    {item?.qualityLabel}
                                </Typography>
                            </Box>
                        ))
                    }
                </Box>
            </Stack>
        </Box>
    )
}

export default Videos