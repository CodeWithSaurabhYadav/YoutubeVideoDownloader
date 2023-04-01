import React from 'react'
import { Box, Typography } from '@mui/material'


const Navbar = () => {
    return (
        <Box
            p={4}
            sx={{
                background: '#3e3e3e',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography
                fontWeight='bold'
                color='#fff'
                sx={{
                    typography: {
                        xs: 'subtitle2',
                        md: 'h4'
                    }
                }}
            >
                YOUTUBE VIDEO DOWNLOADER
            </Typography>
        </Box>
    )
}

export default Navbar