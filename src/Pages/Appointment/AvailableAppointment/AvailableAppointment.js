import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selectedData }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('AppointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on: {format(selectedData, 'PP')}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    appointmentOptions.map(option => <AppointmentOptions
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedData={selectedData}
                    treatment={treatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;