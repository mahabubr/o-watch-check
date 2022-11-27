import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../../Components/Loader/Loader';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const MyWishlist = () => {

    const { user } = useContext(AuthContext)

    const { data: myWishlistData, isLoading } = useQuery({
        queryKey: ['my-wishlist', user?.email],
        queryFn: () => fetch(`https://owatch-check-server.vercel.app/my-wishlist/?email=${user?.email}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-pink-500 border-b-2 border-pink-500 p-2 cursor-pointer'>My Wishlist</h2>

            <div className='mt-10'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myWishlistData.map((product, i) =>
                                    <tr key={product._id} className="hover">
                                        <th>{i + 1}</th>
                                        <td>
                                            {product.wishlist_title}
                                            <p className='text-sm font-bold text-blue-600'>Seller Name : {product.wishlist_seller_name}</p>
                                        </td>
                                        <td>$ {product.wishlist_price}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="w-24 mask mask-squircle">
                                                    <img src={product.wishlist_product_pic} alt="" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <Link to={`/dashboard/my-orders`}>
                                                <button className="btn btn-primary btn-sm">Pay Now</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyWishlist;