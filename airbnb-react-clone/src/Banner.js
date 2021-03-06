import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import Search from './Search';




function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}
                
                <Button
                    onClick={() => {
                        setShowSearch(!showSearch);
                    }}
                    variant='outlined'
                    className='banner__searchButton'
                >
                    Search Dates
                </Button>
            </div>
            <div className="banner__info">
                <h1>Go out stretch your imagination</h1>
                <h5>Settle in somewhere new. Discover stays to live, work or just relax.</h5>
                <Button
                variant='outlined'
                >
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
