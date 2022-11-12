import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../Infocards/InfoCards';
import Other from '../Other/Other';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Other></Other>
        </div>
    );
};

export default Home;