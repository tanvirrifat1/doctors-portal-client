import React from 'react';
import fluorite from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Teeth are the only part of the human body that cant repair itself',
            img: fluorite
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Teeth are the only part of the human body that cant repair itself',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Teeth are the only part of the human body that cant repair itself',
            img: whitening
        },
    ]

    return (
        <div className='mt-16 '>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>OUR SERVICES</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;