import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Loader from '../../../../Components/Loader/Loader';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext)

    const { data: sellerProducts, isLoading, refetch } = useQuery({
        queryKey: ['watch', 'seller-product', user?.email],
        queryFn: () => fetch(`https://owatch-check-server.vercel.app/watch/seller-product/?email=${user?.email}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loader />
    }

    const handleAdvertiseProduct = (item) => {
        const confirm = window.confirm('Are You Sure To Boost This Products')

        const { _id, category_name, product_name, product_resale_price, seller_phone_number, product_pic, product_condition_type } = item

        const advertisedProductInfo = {
            my_product_id: _id,
            category_name,
            product_name,
            product_resale_price,
            seller_phone_number,
            product_pic, product_condition_type
        }


        if (confirm) {
            fetch('https://owatch-check-server.vercel.app/advertised', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(advertisedProductInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        Swal.fire(
                            'Congratulations',
                            'Your Product Now On Boost',
                            'success'
                        )
                    }
                })
        }
    }

    const handleMyProductDelete = (productInfo) => {

        const confirm = window.confirm('Are You Sure To Delete Product')
        if (confirm) {
            fetch(`https://owatch-check-server.vercel.app/watch/${productInfo._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        refetch()
                        toast.success('Product Deleted From Website')
                        Swal.fire(
                            'Congratulations',
                            'Your Product Deleted Successfully',
                            'success'
                        )

                        fetch(`https://owatch-check-server.vercel.app/advertised/${productInfo._id}`, {
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
                .catch(e => toast.error(e.message))
        }
    }


    return (
        <div className='w-9/12 mx-auto my-20'>
            <h1 className='text-4xl font-bold text-center drop-shadow-md'>My Products</h1>
            <div className='mt-10'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th> Product Name</th>
                                <th>Post Time</th>
                                <th>Advertise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sellerProducts.map((product, i) =>
                                    <tr key={product._id} className="hover">
                                        <th>{i + 1}</th>
                                        <td>
                                            {product.product_name.slice(0, 50)}
                                            <p className='text-green-500 font-bold'>Price : {product.product_resale_price}</p>
                                            <p className="badge badge-primary cursor-pointer"> Available</p>
                                        </td>
                                        <td>{product.product_post_time}</td>
                                        <td>
                                            <button onClick={() => handleAdvertiseProduct(product)} className='btn btn-sm btn-secondary block mb-2'>Boost</button>
                                            <button onClick={() => handleMyProductDelete(product)} className='btn btn-sm btn-warning block'>Delete</button>
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

export default MyProducts;