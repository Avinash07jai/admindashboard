import React from 'react';
import './Home.css';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';

const Home = () => {
    return (
        <>
        <div style={{backgroundColor:'gray'}}>
            <div className='mainHeader'>
                <Sidebar />
                <Navbar />
            </div>
            </div>
        </>
    )
}

export default Home;
