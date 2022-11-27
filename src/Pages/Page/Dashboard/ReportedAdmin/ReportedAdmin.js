import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Loader from '../../../../Components/Loader/Loader';

const ReportedAdmin = () => {

    const { data: reportedItemData, isLoading, refetch } = useQuery({
        queryKey: ['reported-admin'],
        queryFn: () => fetch(`https://owatch-check-server.vercel.app/reported-admin`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loader />
    }

    const handleDeleteReportedProduct = (reportedItem) => {
        const confirm = window.confirm('Are You Sure To Delete Item')

        if (confirm) {
            fetch(`https://owatch-check-server.vercel.app/watch/${reportedItem.product_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        Swal.fire(
                            'Congratulations',
                            'Your Product Deleted Successfully',
                            'success'
                        )


                        fetch(`https://owatch-check-server.vercel.app/reported-admin/${reportedItem._id}`, {
                            method: "DELETE"
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    toast.success('Product Deleted From Reported Item')
                                    refetch()
                                }
                            })
                            .catch(e => toast.error(e.message))

                    }
                })
                .catch(e => toast.error(e.message))


            fetch(`https://owatch-check-server.vercel.app/advertised/${reportedItem.product_id}`, {
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

    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-pink-500 border-b-2 border-pink-500 p-2 cursor-pointer'>Reported Items</h2>

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
                                reportedItemData.map((product, i) =>
                                    <tr key={product._id} className="hover">
                                        <th>{i + 1}</th>
                                        <td>
                                            {product.wishlist_title}
                                            <p className='text-sm font-bold text-blue-600'>Seller Name : {product.wishlist_seller_name}</p>
                                            <p className='text-sm font-bold text-orange-600'>Buyer Email : {product.wishlist_buyer_email}</p>
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
                                            <button onClick={() => handleDeleteReportedProduct(product)} className="btn btn-primary btn-sm">Delete Product</button>
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

export default ReportedAdmin;