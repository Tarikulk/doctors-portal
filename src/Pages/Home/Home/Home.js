import React from 'react';
import Banner from '../Banner/Banner';
import Checking from '../Checking/Checking';
import Contact from '../Contact/Contact';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
             <Banner></Banner>
             <InfoCards></InfoCards>
             <Services></Services>
             <Checking></Checking>
             <MakeAppointment></MakeAppointment>
             <Testimonial></Testimonial>
             <Contact></Contact>
        </div>
    );
};

export default Home;