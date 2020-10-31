import React from 'react';
import Pagination from './Pagination';
import NavBar from './NavBar';
import { useState } from 'react';
import Curiosity from './Curiosity';
import Opportunity from './Opportunity';
import Spirit from './Spirit';

function Home() {
    const [robot, setRover] = useState('Curiosity') 
    return (
        <div>
            <NavBar setRover={setRover} />
            {robot === "Curiosity"? <Curiosity/>:
            robot === "Opportunity"? <Opportunity/>:
            <Spirit/> }
            <Pagination />
        </div>
    )
}

export default Home;