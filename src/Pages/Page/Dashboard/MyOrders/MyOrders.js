import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Loader from '../../../../Components/Loader/Loader';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const { data: myOrdersList, isLoading } = useQuery({
        queryKey: ['my-orders', user?.email],
        queryFn: () => fetch(`https://owatch-check-server.vercel.app/my-orders/?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .catch(e => toast.error(e.message))
    })

    if (isLoading) {
        return <Loader />
    }

    // order having an image, title, price, and a pay button

    return (
        <div className="w-10/12 mx-auto my-20">
            <h1 className='text-4xl font-bold text-center drop-shadow-md'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mt-10">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myOrdersList.map(order =>
                                <tr key={order._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={order.booking_image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {order.booking_title}
                                        <br />
                                        <span className="badge badge-secondary p-3 text-white badge-sm">{order.booking_category_name}</span>
                                    </td>
                                    <td>$ {order.booking_price}</td>
                                    <th>
                                        {
                                            order.paid ?
                                                <button className="btn btn-secondary cursor-not-allowed btn-sm" >Purchased</button>
                                                :
                                                <Link to={`/payment/${order._id}`}>
                                                    <button className="btn btn-primary btn-sm">Pay Now</button>
                                                </Link>
                                        }
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;