import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)

const Payment = () => {
    const booking = useLoaderData()
    const { treatment, price, appointmentDate, slot } = booking;
    return (
        <div className='text-black'>
            <h2 className="text-2xl">Payment for {treatment} </h2>
            <p className="text-xl mt-4">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;