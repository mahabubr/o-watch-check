import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm/CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const Payment = () => {

    const myBookingPaymentInfo = useLoaderData()

    const { booking_title, booking_price } = myBookingPaymentInfo

    return (
        <div>
            <div>
                <h2 className='text-xl font-semibold text-pink-500'>Payment For <span className='text-2xl font-bold text-gray-700 border-b-2 border-gray-700 py-2'>{booking_title}</span></h2>
                <p className='mt-4'>Please Pay <span className='text-xl font-bold text-green-600'>$ {booking_price}</span></p>
            </div>
            <div className='mt-10 w-10/12 md:w-8/12 lg:w-6/12 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm myBookingPaymentInfo={myBookingPaymentInfo} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;