import React from 'react';
import clockIcon from '../../assets/icons/clock.svg';
import locationIcon from '../../assets/icons/marker.svg';
import phoceIcon from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {

    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard bg_class="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={clockIcon} ></InfoCard>
            <InfoCard bg_class="bg-[#3A4256]" cardTitle="Our Location" img={locationIcon} >  </InfoCard>
            <InfoCard bg_class="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us" img={phoceIcon} ></InfoCard>
        </div>
    );
};

export default Info;