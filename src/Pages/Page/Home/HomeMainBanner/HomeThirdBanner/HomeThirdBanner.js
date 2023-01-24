import React from 'react';
import { Link } from 'react-router-dom';
import thirdBanner from '../../../../../Assets/main_header/3.png'


const HomeThirdBanner = () => {
    return (
        <div>
            <div className='bg-gradient-to-r mt-4 shadow-xl rounded-lg relative from-violet-400 via-violet-500 to-violet-600 overflow-hidden'>
                <img src={thirdBanner} className="hover:scale-125 duration-1000" alt="" />
                <div className='absolute top-5 left-10 right-20'>
                    <div className='flex justify-center items-center w-full'>
                        <div className='w-8/12'>
                            <h1 className='md:text-2xl font-bold text-white'>
                                Buy Your Second Hand Watch
                            </h1>
                            <Link to='/watch-category/637f6e38b2c7870c08c21403'>
                                <button className="hidden md:block mt-10 px-10 py-4 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">Smart Watch</button>
                            </Link>
                        </div>
                        <div className='w-5/12'>
                            <img src="https://i.ibb.co/vLFGQ86/3.png" className='w-full h-40' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeThirdBanner;