import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedData }) => {
    const { name, slots } = treatment;
    const date = format(selectedData, 'PP')
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={date} className="input input-bordered input-primary w-full" />
                        <select className="select select-bordered border-info w-full">
                            <option>Who shot first?</option>
                            {
                                slots.map(slot => <option value={slot}> {slot}</option>
                                )
                            }
                        </select>                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                        <input className='btn btn-secondary w-full' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;