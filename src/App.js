import React from 'react'
import { Navbar, Home } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App