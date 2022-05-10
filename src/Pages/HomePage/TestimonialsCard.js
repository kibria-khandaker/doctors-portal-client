import React from 'react';

const TestimonialsCard = ({ review }) => {
    return (
        <div className="card   bg-base-100 shadow-xl">
            <div className="card-body">

                <p> {review.description} </p>

                <div className=' flex items-center mt-7'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                            <img  src={review.img} alt='reviewImg' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>  {review.name} </h4>
                        <p>  {review.location} </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TestimonialsCard;