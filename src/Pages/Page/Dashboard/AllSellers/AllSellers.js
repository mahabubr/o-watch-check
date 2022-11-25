import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Loader from '../../../../Components/Loader/Loader';

const AllSellers = () => {

    const { data: allSeller, isLoading, refetch } = useQuery({
        queryKey: ['all-users', 'all-sellers'],
        queryFn: () => fetch('http://localhost:5000/all-users/all-sellers')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loader />
    }

    const handleSellerDelete = (sellerInfo) => {
        const confirm = window.confirm('Are Your Sure To Delete Seller')

        if (confirm) {
            fetch(`http://localhost:5000/all-users/${sellerInfo._id}`, {
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

    return (
        <div>
            <h2 className='text-2xl font-bold text-pink-500 border-b-2 border-pink-500 p-2 cursor-pointer'>All Sellers : {allSeller.length}</h2>
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
                                            <td>
                                                <button onClick={() => handleSellerDelete(seller)} className='btn btn-sm btn-secondary'>Delete</button>
                                            </td>
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