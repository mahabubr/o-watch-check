import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Loader from '../../../../Components/Loader/Loader';

const AllBuyers = () => {

    const { data: allBuyers, isLoading, refetch } = useQuery({
        queryKey: ['all-users', 'all-buyers'],
        queryFn: () => fetch('https://owatch-check-server.vercel.app/all-users/all-buyers')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loader />
    }

    const handleBuyersDelete = (buyersInfo) => {
        const confirm = window.confirm('Are Your Sure To Delete Buyers')

        if (confirm) {
            fetch(`https://owatch-check-server.vercel.app/all-users/${buyersInfo._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        refetch()
                        Swal.fire(
                            'Congratulations',
                            'Buyer Deleted Successfully',
                            'success'
                        )
                    }
                })
                .catch(e => toast.error(e.message))
        }
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-pink-500 border-b-2 border-pink-500 p-2 cursor-pointer'>All Sellers : {allBuyers.length}</h2>
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
                                allBuyers.map((buyers, i) =>
                                    <tr key={buyers._id}>
                                        <th>{i + 1}</th>
                                        <td>{buyers.fullName}</td>
                                        <td>{buyers.email}</td>
                                        <td>{buyers.role}</td>
                                        <td>
                                            <button onClick={() => handleBuyersDelete(buyers)} className='btn btn-sm btn-secondary'>Delete</button>
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

export default AllBuyers;