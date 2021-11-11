import React from 'react';
import Cars from '../../../Shared/Cars/Cars';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CarType from '../CarType/CarType';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import TopNavigation from '../TopNavigation/TopNavigation';

const Home = () => {

    return (
        <div>
            <TopNavigation></TopNavigation>
            <Banner></Banner>
            <About></About>
            <Cars></Cars>
            <Reviews></Reviews>
            <CarType></CarType>
            <Footer></Footer>
        </div>
    );
};

export default Home;