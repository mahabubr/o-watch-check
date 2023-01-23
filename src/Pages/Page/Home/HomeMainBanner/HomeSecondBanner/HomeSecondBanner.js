import React from 'react';
import { Link } from 'react-router-dom';
import secondBanner from '../../../../../Assets/main_header/2.png'

const HomeSecondBanner = () => {
    return (
        <div className='bg-gradient-to-r shadow-xl rounded-lg relative from-blue-400 via-blue-500 to-blue-600 overflow-hidden'>
            <img src={secondBanner} className="hover:scale-125 duration-1000" alt="" />
            <div className='absolute top-10 left-10 right-20'>
                <div className='flex justify-center items-center w-full'>
                    <div className='w-8/12'>
                        <h1 className='md:text-2xl font-bold text-white'>
                            Buy Your Second Hand Watch
                        </h1>
                        <Link to='/watch-category/637f6e38b2c7870c08c21400'>
                            <button className="hidden md:block mt-10 px-10 py-4 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">Analog Watch</button>
                        </Link>
                    </div>
                    <div className='w-5/12'>
                        <img src="https://i.ibb.co/M784FW3/2.png" className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSecondBanner;