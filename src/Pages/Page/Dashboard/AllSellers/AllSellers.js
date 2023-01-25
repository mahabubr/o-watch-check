import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Loader from '../../../../Components/Loader/Loader';

const AllSellers = () => {

    const { data: allSeller, isLoading, refetch } = useQuery({
        queryKey: ['all-users', 'all-sellers'],
        queryFn: () => fetch('https://owatch-check-server.vercel.app/all-users/all-sellers')
            .then(res => res.json())
    }
    )


    if (isLoading) {
        return <Loader />
    }

    const handleSellerDelete = (sellerInfo) => {
        const confirm = window.confirm('Are Your Sure To Delete Seller')

        if (confirm) {
            fetch(`https://owatch-check-server.vercel.app/all-users/${sellerInfo._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        refetch()
                        Swal.fire(
                            'Congratulations',
                            'Seller Deleted Successfully',
                            'success'
                        )
                    }
                })

                .catch(e => toast.error(e.message))
        }
    }

    const handleVerifySeller = (seller) => {

        fetch(`https://owatch-check-server.vercel.app/watch/verify-seller/?email=${seller.email}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: true })
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    Swal.fire(
                        'Congratulations',
                        'Your Have Successfully Verify Your Seller ',
                        'success'
                    )
                    return
                }
                else {
                    toast.loading("This User Not Added At Least One Product")
                }

            })
            .catch(e => toast.error(e.message))



    }


    return (
        <div className='w-9/12 mx-auto my-20'>
            <h1 className='text-4xl font-bold text-center drop-shadow-md'>All Sellers</h1>
            <div className='mt-10'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allSeller.map((seller, i) =>
                                    <tr key={seller._id}>
                                        <th>{i + 1}</th>
                                        <td>{seller.fullName}</td>
                                        <td>{seller.email}</td>
                                        <td>{seller.role}</td>
                                        <td>
                                            <button onClick={() => handleSellerDelete(seller)} className='btn btn-sm btn-secondary'>Delete</button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleVerifySeller(seller)} className='btn btn-sm '>Verify</button>
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

export default AllSellers;