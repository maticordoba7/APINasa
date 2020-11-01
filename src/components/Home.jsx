import React from 'react';
import Pagination from './Pagination';
import NavBar from './NavBar';
import Cards from './Cards'
import Selectors from './Selectors';

function Home() {
    return (
        <div>
            <NavBar />
            <Selectors/>
            <Cards/>
            <Pagination />
        </div>
    )
}

export default Home;