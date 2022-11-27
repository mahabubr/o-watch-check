import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckOutForm = ({ myBookingPaymentInfo }) => {

    const { booking_price, booking_user_email, booking_title, _id, booking_item_id } = myBookingPaymentInfo

    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe()
    const elements = useElements()

    const navigate = useNavigate()

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://owatch-check-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ booking_price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [booking_price]);

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            toast.error(error.message)
            return
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: booking_title,
                        email: booking_user_email
                    },
                },
            },
        );

        if (confirmError) {
            toast.error(confirmError.message)
            return
        }

        if (paymentIntent.status === "succeeded") {

            // Store Payment Info Into Database

            const payment = {
                booking_price,
                booking_user_email,
                booking_title,
                payment_product_id: _id,
                transition_id: paymentIntent.id,

            }

            fetch("https://owatch-check-server.vercel.app/payments", {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {

                        fetch(`https://owatch-check-server.vercel.app/watch/${booking_item_id}`, {
                            method: "DELETE"
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    toast.success('Product Deleted From Website')
                                    Swal.fire(
                                        'Congratulations',
                                        `Your Payment Successfully Complete - ${paymentIntent.id}`,
                                        'success'
                                    )
                                    navigate('/dashboard/my-orders')
                                }
                            })
                            .catch(e => toast.error(e.message))


                        fetch(`https://owatch-check-server.vercel.app/advertised/${booking_item_id}`, {
                            method: "DELETE"
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    toast.success('Advertized Product Deleted From Website')
                                }
                            })
                            .catch(e => toast.error(e.message))

                    }
                })
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="inline-block w-full py-3 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer mt-10" type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay And Booked Your Products
                </button>
            </form>
        </>
    );
};

export default CheckOutForm;