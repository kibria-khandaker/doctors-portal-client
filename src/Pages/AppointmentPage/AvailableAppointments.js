import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import TreatmentItem from './TreatmentItem';
import Loading from './../Shared/Loading';

const AvailableAppointments = ({ date, setDate }) => {
    // const [services, setServices] = useState([]);
    const [treatments, setTreatments] = useState(null);

    const formattedDate = format(date, 'PP');
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[formattedDate])

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h3 className='my-28 text-2xl text-secondary text-center'> Available Appointments on {format(date, 'PP')}</h3>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    services?.map(service => (
                        <TreatmentItem
                            key={service._id}
                            service={service}
                            setTreatments={setTreatments}
                        ></TreatmentItem>
                    ))
                }
            </div>
            {treatments && <BookingModal
                date={date}
                treatments={treatments}
                refetch={refetch}
                setTreatments={setTreatments}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;