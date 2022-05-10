import React from 'react';
import cavityImg from '../../assets/images/cavity.png';
import fluorideImg from '../../assets/images/fluoride.png';
import whiteningImg from '../../assets/images/whitening.png';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluorideImg
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavityImg
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whiteningImg
        },
    ]
    return (
        <div className='my-24'>
            <div className='text-center'>
                <h3 className=' text-primary  font-bold text-xl'> Our Services </h3>
                <h2 className=' text-3xl'> Services We Provide </h2>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service =>(
                        <ServicesCard
                            key={service._id}
                            service={service}
                        ></ServicesCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;