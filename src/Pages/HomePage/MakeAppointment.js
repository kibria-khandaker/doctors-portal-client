import React from 'react';
import doctor from '../../assets/images/doctor.png'
import doctorBackground from '../../assets/images/appointment.png'
import BtnGradient from './../Shared/BtnGradient';

const MakeAppointment = () => {
    return (
        <section  className='flex justify-center items-center -mx-12 mt-36'  style={{
            background: `url(${doctorBackground})`,
            backgroundPosition:'center',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
        }} >
            <div className=' flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className=' flex-1 p-12 lg:p-0 lg:pr-12'>

                <h3 className='text-xl font-bold text-primary'> Appointment </h3>
                <h2 className='text-3xl text-white pt-3'> Make an appointment Today </h2>
                <p className='text-white py-7'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                </p>
                <BtnGradient> Get Started </BtnGradient>

            </div>
        </section>
    );
};

export default MakeAppointment;