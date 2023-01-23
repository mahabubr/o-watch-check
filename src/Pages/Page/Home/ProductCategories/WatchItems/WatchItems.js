import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import WatchSingleItem from './WatchSingleItem/WatchSingleItem';
import BookNowModal from '../../BookNowModal/BookNowModal'


const WatchItems = () => {

    const watchItem = useLoaderData()

    const [singleWatch, setSingleWatch] = useState(null)

    return (
        <div className='my-20 w-10/12 mx-auto'>
            <div className='flex justify-center items-center mt-6 md:w-8/12 lg:w-4/12 mx-auto'>
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full rounded-none" />
                <div className='bg-pink-500 text-white p-2 text-4xl cursor-pointer hover:bg-pink-600 duration-300'>
                    <BiSearchAlt />
                </div>
            </div>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {watchItem.map(item => <WatchSingleItem key={item._id} item={item} setSingleWatch={setSingleWatch} />)}
            </div>
            <div>
                {
                    singleWatch &&
                    <BookNowModal singleWatch={singleWatch} setSingleWatch={setSingleWatch}></BookNowModal>
                }
            </div>
        </div>
    );
};

export default WatchItems;