import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ date, setDate }) => {
    return (
        <div>
            <p> Available Appointments on {format(date, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointments;