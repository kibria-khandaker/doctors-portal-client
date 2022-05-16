import React from 'react';

const TreatmentItem = ({ service, setTreatments }) => {
    const { _id, name, slots } = service;
    return (
        <div className="card w-100  bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary text-center mb-3"> {name} </h2>
                <p>
                    {
                        // slots.length eita o nicher line ekoi
                        slots.length > 0
                            ? <span> {slots[0]} </span>
                            // ? <span> 8 AM - 11.30 AM  </span>
                            : <span className=' text-red-500' > No Schedule Available, Try another day </span>
                    }
                </p>
                <p className=' text-xs'>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'}  AVAILABLE</p>
                <div className="card-actions justify-center mt-3">

                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatments(service)}
                        className="btn btn-sm btn-primary bg-gradient-to-r from-secondary to-primary text-white border-0">
                        Book Appointment
                    </label>

                </div>
            </div>
        </div>
    );
};

export default TreatmentItem;