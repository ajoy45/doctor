import React from 'react';
import Banner from '../Banner/Banner';
import Servicess from '../Servicess/Servicess';
import Team from '../Team-member/Team';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Servicess></Servicess>
            <Team></Team>
        </div>
    );
};

export default Home;