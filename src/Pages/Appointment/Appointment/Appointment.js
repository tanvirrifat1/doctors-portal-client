import React, { useState } from 'react';
import Tittle from '../../../Hook/Tittle';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedData, setSelectedDate] = useState(new Date())

    Tittle('Appointment')
    return (
        <div>
            <AppointmentBanner
                selectedData={selectedData}
                setSelectedDate={setSelectedDate}
            >
            </AppointmentBanner>
            <AvailableAppointment
                selectedData={selectedData}
            // setSelectedDate={setSelectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;