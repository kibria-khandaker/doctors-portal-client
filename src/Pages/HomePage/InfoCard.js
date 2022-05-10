import React from 'react';

const InfoCard = ({img, cardTitle, bg_class}) => {
    return (
        <div className={`card px-5 py-5 lg:card-side bg-base-100 shadow-xl ${bg_class} `}>
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title"> {cardTitle} </h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;