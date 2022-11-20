import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData()

    // const navigation = useNavigation()

    const { treatment, price, appointmentDate, slot } = booking;

    // if (navigation.state === 'Loading') {
    //     return <Loading></Loading>
    // }

    return (
        <div className='text-black'>
            <h2 className="text-2xl">Payment for {treatment} </h2>
            <p className="text-xl mt-4">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;