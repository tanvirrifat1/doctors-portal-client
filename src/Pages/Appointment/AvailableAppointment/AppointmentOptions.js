import React from 'react';

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {

    const { name, slots } = appointmentOption;

    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body  text-center">
                    <h2 className="card-title text-secondary font-bold flex justify-center">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                    <div className="card-actions justify-center">
                        <label
                            htmlFor="booking-modal"
                            className="text-white btn btn-primary"
                            onClick={() => setTreatment(appointmentOption)}
                        >Book Appointment </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;