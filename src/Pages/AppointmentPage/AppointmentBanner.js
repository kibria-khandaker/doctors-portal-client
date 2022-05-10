import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chairBanner from '../../assets/images/chair.png';

const AppointmentBanner = ({date, setDate}) => {

    // eita doc theke neoya but j-vai aro easy vabe koreche --
    let dateFooter = <p>Please pick a day.</p>;
    if (date) {
        dateFooter= <p>You picked :- {format(date, 'PP')}.</p>;
    }
    //--

    return (
        <div className="hero  min-h-screen bg-white/[0.9] bg-center bg-no-repeat bg-cover" style={{
            backgroundImage: `url('${chairBanner}')`,
            backgroundBlendMode: 'overlay'
        }}  >
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chairBanner} className="w-2/4 rounded-lg shadow-2xl" alt='chairImage' />
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    footer={dateFooter}
                />
                {/* <p>You picked :- {format(date, 'PP')}</p> eita dile doc erta deite hobe na dateFooter/format/footer */}
            </div>
        </div>
    );
};

export default AppointmentBanner;