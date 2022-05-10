import React from 'react';
import BtnGradient from './../Shared/BtnGradient';
import doctorBackground2 from '../../assets/images/appointment.png'

const sectionBg = {
    background: `url(${doctorBackground2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

const HomeLogin = () => {
    return (
        <section className=' -mx-12 py-20' style={sectionBg}>

            <div className=' text-center'>
                <h3 className='text-xl font-bold text-primary'> Contact Us </h3>
                <h2 className='text-3xl text-white pt-2'> Stay connected with us </h2>
            </div>
            <div className='w-4/5 md:w-2/3 lg:w-1/3 mx-auto py-10 text-center'>
                <div className="form-control ">
                    <input type="text" placeholder="Type here" className=" input input-bordered input-lg w-full" />
                    <input type="text" placeholder="Type here" className="my-5 input input-bordered input-lg w-full" />
                    <textarea className="textarea mb-10" placeholder="Bio"></textarea>
                </div>
                <BtnGradient> Submit </BtnGradient>
            </div>

        </section>
    );
};

export default HomeLogin;