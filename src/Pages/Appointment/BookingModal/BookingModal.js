import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ treatment, selectedData, setTreatment, refetch }) => {
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedData, 'PP')
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
        }
        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking Confirmed', { autoClose: 500 })
                    refetch();
                }
                else {
                    toast.error(data.message, { autoClose: 1000 })
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='date' type="text" value={date} className="input input-bordered input-primary w-full" />
                        <select name='slot' className="select select-bordered border-info w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot} </option>
                                )
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered input-primary w-full" readOnly />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address" className="input input-bordered input-primary w-full" readOnly />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-primary w-full" />
                        <br />
                        <input className='btn btn-secondary w-full' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;