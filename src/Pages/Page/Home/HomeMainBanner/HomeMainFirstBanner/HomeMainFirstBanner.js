import React from 'react';
import { Link } from 'react-router-dom';
import firstBanner from '../../../../../Assets/main_header/1.png'

const HomeMainFirstBanner = () => {
    return (
        <div className='bg-gradient-to-r shadow-xl rounded-lg relative from-orange-400 via-orange-500 to-orange-600 overflow-hidden'>
            <img src={firstBanner} className="hover:scale-125 duration-1000" alt="" />
            <div className='absolute top-10 left-10 md:top-32 md:left-20 right-20'>
                <div className='flex justify-center items-center w-full'>
                    <div className='w-6/12'>
                        <h1 className='md:text-5xl font-bold text-white'>
                            Buy Your Second Hand Watch
                        </h1>
                        <Link to='/watch-category/637f6e38b2c7870c08c21401'>
                            <button className="hidden md:block mt-10 px-10 py-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">Digital Watch</button>
                        </Link>
                    </div>
                    <div className='w-6/12'>
                        <img src="https://i.ibb.co/PGc6B54/1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMainFirstBanner;