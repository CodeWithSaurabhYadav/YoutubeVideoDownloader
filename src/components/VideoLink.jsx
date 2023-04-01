import React from 'react'
import { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const VideoLink = ( { setVideoId } ) => {


    const [searchTerm, setSearchTerm] = useState('')
    const [videoId, setVideoId2] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const Link = searchTerm
        console.log(Link)
        console.log(searchTerm)

        console.log(Link.indexOf('='))

        if(Link.indexOf('=') == -1){
            setVideoId2(Link.slice(Link.lastIndexOf('/') + 1, (Link.length)))
        } else {    
            setVideoId2(Link.slice(Link.indexOf('=') + 1, (Link.length)))
        }


        if(videoId) {
            setVideoId(videoId)
        }

    }

    return (
        <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
                pl: 2,
                borderShadow: 'none',
                mr: { sm: 5 },
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <input
                className='searchBar'
                placeholder='Youtube video link'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton
                type='submit'
                sx={{
                    background: 'red',
                    borderRadius: '0',
                    p: '10px',
                    color: 'white'
                }}
            >
                <Search />
            </IconButton>
        </Box>
    )
}

export default VideoLink