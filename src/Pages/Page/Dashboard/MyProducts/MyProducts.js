import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import Loader from '../../../../Components/Loader/Loader';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext)

    const { data: sellerProducts, isLoading } = useQuery({
        queryKey: ['watch', 'seller-product', user?.email],
        queryFn: () => fetch(`http://localhost:5000/watch/seller-product/?email=${user?.email}`)
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
            fetch('http://localhost:5000/advertised', {
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


    return (
        <div>
            <h2 className='text-2xl font-bold text-pink-500 border-b-2 border-pink-500 p-2 cursor-pointer'>My Products</h2>

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
                                            {product.product_name}
                                            <p className='text-green-500 font-bold'>Price : {product.product_resale_price}</p>
                                            <p className="badge badge-primary cursor-pointer"> Available</p>
                                        </td>
                                        <td>{product.product_post_time}</td>
                                        <td>
                                            <button onClick={() => handleAdvertiseProduct(product)} className='btn btn-sm btn-secondary block mb-2'>Boost</button>
                                            <button className='btn btn-sm btn-warning block'>Delete</button>
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