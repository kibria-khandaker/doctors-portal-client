import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Treatment from './Treatment';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import HomeLogin from './HomeLogin';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
             <HomeLogin></HomeLogin>
        </div>
    );
};

export default Home;