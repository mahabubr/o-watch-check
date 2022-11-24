import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const BookNowModal = ({ singleWatch, setSingleWatch }) => {

    const { product_name, product_resale_price } = singleWatch

    const { user } = useContext(AuthContext)

    const handleSubmitBooing = (event) => {
        event.preventDefault()

        setSingleWatch(null)
        Swal.fire(
            'Congratulations',
            'Your Booking Successfully Done',
            'success'
        )
    }

    return (
        <>
            <input type="checkbox" id="book-now-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmitBooing} className="modal-box relative">
                    <label htmlFor="book-now-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-indigo-600">{product_name}</h3>
                    <div className='mt-4 space-y-3'>
                        <input type="text" defaultValue={user?.displayName} readOnly className="input input-bordered input-info w-full" />
                        <input type="text" defaultValue={user?.email} readOnly className="input input-bordered input-info w-full" />
                        <input type="text" defaultValue={`$ ${product_resale_price}`} readOnly className="input input-bordered input-info w-full" />
                        <input type="number" placeholder='Enter Your Phone Number' className="input input-bordered input-info w-full" required />
                        <input type="text" placeholder='Enter Your Location' className="input input-bordered input-info w-full" required />
                    </div>
                    <input type="submit" value="Submit Your Booking" data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="inline-block text-center px-6 py-4 w-full mt-4 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out" />
                </form>
            </div>

        </>
    );
};

export default BookNowModal;