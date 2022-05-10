import React from 'react';
import treatmentImg from '../../assets/images/treatment.png';
import BtnGradient from '../Shared/BtnGradient';

const Treatment = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatmentImg} className="max-w-sm rounded-lg shadow-2xl" alt='treatmentImg' />
                <div className=' px-5 py-20 lg:px-20'>
                    <h1 className="text-5xl font-bold">
                        Exceptional Dental Care, on Your Terms
                    </h1>
                    <p className="py-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    </p>
                    <BtnGradient>  Get Started  </BtnGradient>
                </div>
            </div>
        </div>
    );
};

export default Treatment;