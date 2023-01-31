import React from 'react';

import cavity from "../../../assets/images/cavity.png"
import whitening from "../../../assets/images/whitening.png"
import fluoride from "../../../assets/images/fluoride.png"
import Service from './Service';

const servicesData = [
    {
        id : 1, 
        image: cavity,
        name: "Cavity Filling",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        bgClass: "bg-gradient-to-r from-primary to-secondary"
    },
    {
        id : 2, 
        image: whitening,
        name: "Teeth Whitening",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        bgClass: "bg-accent"
    },
    {
        id : 3, 
        image: fluoride,
        name: "Fluoride Treatment",
        description: "+000 123 456789",
        bgClass: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    },
]

const Services = () => {
    return (
        <div>
            <h1 className='text-2xl text-primary text-center'>Our Services</h1>
            <h1 className='text-3xl text-accent text-center'>Services We Provide</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20'>
            {
                servicesData.map(service => <Service
                key={service.id}
                service={service}
                ></Service> )
            }
        </div>
        </div>
    );
};

export default Services;