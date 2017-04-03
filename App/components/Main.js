import React from 'react'

import SearchBar from 'SearchBar';
import WeatherList from 'WeatherList';


const Main = (props) => {
    return (
        <div>
            <SearchBar />
            <WeatherList />
        </div>
    )
}

export default Main
