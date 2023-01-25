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
        <div className='my-40 w-9/12 mx-auto'>
            <div>
                <h1 className='text-4xl font-bold text-center drop-shadow-md'>Payment For <span className='text-xl text-purple-500'>{booking_title}</span></h1>
                <p className='mt-4 text-center font-bold'>Please Pay <span className='text-xl text-purple-500'>$ {booking_price}</span></p>
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