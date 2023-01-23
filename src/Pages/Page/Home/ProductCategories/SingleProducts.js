import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProducts.css'

const SingleProducts = ({ watch }) => {

    const { name, image, description, _id } = watch

    return (
        <div className="">
            <div className="rounded-lg w-full p-8 hover__effect bg-gray-300 hover:bg-gray-200 duration-300 shadow-inner text-center md:flex justify-center items-center">
                <div className="p-6 md:w-6/12">
                    <h5 className="text-indigo-900 text-2xl font-bold mb-2">{name}</h5>
                    {/* <p className="text-gray-700 text-base mb-4 text-justify">
                        {description.slice(0, 150)}...
                    </p> */}
                    <Link to={`/watch-category/${_id}`}>
                        <button type="button" className="inline-block w-full py-4 px-4 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">See {name} Category</button>
                    </Link>
                    {/* <label htmlFor="my-modal-3" className="py-3 px-6 border-t border-gray-300 text-gray-600 cursor-pointer">
                        <p className='underline text-sm text-sky-600'>About More This Products</p>
                    </label> */}
                </div>
                <div className="py-3 px-6 border-b border-gray-300 md:w-6/12">
                    <img src={image} className="w-96 h-60 object-cover rounded-full drop-shadow-md" alt="" />
                </div>
            </div>
            {/* Put this part before </body> tag */}
            {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">About Watch</h3>
                    <p className="py-4">A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory for men and women, and expensive watches are designed for this purpose. A watch may be one of the few accessories worn by a person.</p>
                    <p className="py-4">A wristwatch is designed to be worn on a wrist, attached by a strap or other type of bracelet. A pocket watch is to be carried in a pocket. There are other variations. Nurses often wear a watch attached to the front of their uniform. It hangs down from a short strap: when lifted by the user it is right side up.</p>
                </div> */}
            {/* </div> */}
        </div>
    );
};

export default SingleProducts;