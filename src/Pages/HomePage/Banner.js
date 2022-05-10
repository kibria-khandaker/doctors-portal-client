import React from 'react';
import chairBanner from '../../assets/images/chair.png';
import BtnGradient from '../Shared/BtnGradient';

const Banner = () => {
    return (
        <div className="hero  min-h-screen bg-white/[0.9] bg-center bg-no-repeat bg-cover" style={{
            backgroundImage: `url('${chairBanner}')`,
            backgroundBlendMode: 'overlay'
        }}  >
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chairBanner} className="w-2/4 rounded-lg shadow-2xl" alt='chairImage' />
                <div className='w-2/4'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <BtnGradient>  Get Started  </BtnGradient>
                </div>
            </div>
        </div>
    );
};

export default Banner;