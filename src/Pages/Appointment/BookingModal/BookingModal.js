import { format } from 'date-fns';
import React from 'react';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, selectedData, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedData, 'PP')

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }

        console.log(booking)
        toast.success('successfully Booking', { autoClose: 500 })
        form.reset()
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='slot' type="text" value={date} className="input input-bordered input-primary w-full" />
                        <select className="select select-bordered border-info w-full">
                            <option>Who shot first?</option>
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot} </option>
                                )
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-primary w-full" />
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered input-primary w-full" />
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