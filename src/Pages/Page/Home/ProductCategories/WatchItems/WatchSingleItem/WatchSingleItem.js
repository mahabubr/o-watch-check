import React from 'react';
import { GoVerified } from 'react-icons/go';


const WatchSingleItem = ({ item, setSingleWatch }) => {

    const { product_pic, product_name, product_location, product_resale_price, product_original_price, product_years_use, product_post_time, product_seller_name, seller_verified } = item

    console.log(item);


    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img className=" w-full h-96 border-r-2 border-gray-400 drop-shadow-lg md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={product_pic} alt="" />
                <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-bold mb-2">{product_name}</h5>
                    <div className='flex justify-between mt-1 font-bold text-violet-600'>
                        <p>Resale Price : $ {product_resale_price}</p>
                        <p>Original Price : $ {product_original_price}</p>
                    </div>
                    <div className='border p-3 my-2 shadow-inner'>
                        <p className='font-medium'>Shop Location : {product_location}</p>
                        <p>Years Of Use : {product_years_use}</p>
                        <p>Post Time : {product_post_time}</p>
                    </div>
                    <div className='flex justify-start items-center'>
                        <p>Seller Name : <span className='text-xl text-pink-600 font-bold'>{product_seller_name}</span></p>
                        {
                            seller_verified &&
                            <GoVerified className='ml-2 text-xl text-blue-600' />
                        }
                    </div>
                    <div className="flex space-x-2 justify-center">
                        <label
                            onClick={() => setSingleWatch(item)}
                            htmlFor="book-now-modal"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="inline-block text-center px-6 py-4 w-full mt-4 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Book Now
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchSingleItem;