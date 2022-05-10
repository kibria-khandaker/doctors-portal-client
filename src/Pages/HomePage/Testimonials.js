import React from 'react';
import quoteImg from '../../assets/icons/quote.svg';
import people1Img from '../../assets/images/people1.png';
import people2Img from '../../assets/images/people2.png';
import people3Img from '../../assets/images/people3.png';
import TestimonialsCard from './TestimonialsCard';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1Img
        },
        {
            _id: 2,
            name: 'Romisy Hais',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2Img
        },
        {
            _id: 3,
            name: 'Jesica Pitter',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3Img
        },
    ]
    return (
        <section className='py-28'>
            <div className=' flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold"> Testimonial </h4>
                    <h2 className=' text-3xl'> What Our Patients Says </h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quoteImg} alt="quoteImg" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => (
                        <TestimonialsCard
                            key={review._id}
                            review={review}
                        ></TestimonialsCard>
                    ))
                }
            </div>
        </section>
    );
};

export default Testimonials;