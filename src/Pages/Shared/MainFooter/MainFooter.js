import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

const MainFooter = () => {
    return (
        <div className='bg-gray-800 p-16 text-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:place-items-center'>
                <div>
                    <div className=''>
                        <h1 className='text-2xl font-bold mb-6'>O-<span className='text-orange-500 text-3xl'>Watch</span> Check</h1>
                        <p className='text-gray-300'>Reach us Monday – Friday</p>
                        <p className='text-gray-300'>9 am – 6 pm (UTC+7)</p>
                        <h3 className='text-lg mt-4'>Call: +1 222 333 4444</h3>
                        <button className="inline-block py-2 px-4 bg-teal-400 text-gray-800 mt-2 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-400 hover:shadow-lg focus:bg-teal-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">Email</button>
                    </div>
                </div>
                <div className='mt-8 lg:mt-0'>
                    <h2 className='text-xl font-bold'>Company</h2>
                    <div className='text-gray-300 hover:text-white duration-500 mt-6'>
                        <Link className='font-semibold text-gray-300 hover:text-white duration-500'><p className=''>About</p></Link>
                        <Link className='font-semibold text-gray-300 hover:text-white duration-500'><p className='mt-3'>Team</p></Link>
                        <Link className='font-semibold text-gray-300 hover:text-white duration-500'><p className='mt-3'>Showcase</p></Link>
                        <Link className='font-semibold text-gray-300 hover:text-white duration-500'><p className='mt-3'>news</p></Link>
                    </div>
                </div>
                <div className='mt-8 lg:mt-0'>
                    <h2 className='text-xl font-bold'>Services</h2>
                    <div className='text-gray-300 hover:text-white duration-500 mt-6'>
                        <Link className='font-semibold text-gray-300 hover:text-white duration-500'><p className=''>Consulting</p></Link>
                        <Link className='font-semibold text-gray-300 hover:text-white duration-500'><p className='mt-3'>Digital art</p></Link>
                        <Link className='font-semibold text-gray-300 hover:text-white duration-500'><p className='mt-3'>Web design</p></Link>
                        <Link className='font-semibold text-gray-300 hover:text-white duration-500'><p className='mt-3'>Social media marketing</p></Link>
                    </div>
                </div>
                <div className='mt-8 lg:mt-0'>
                    <h2 className='text-xl font-bold'>Connect</h2>
                    <div className='text-gray-300 hover:text-white duration-500 mt-6 space-y-6'>
                        <Link className='font-semibold text-gray-300 hover:text-white duration-500 flex items-center space-x-1'>
                            <BsFacebook />
                            <p className=''>Facebook</p>
                        </Link>
                        <Link className='font-semibold text-gray-300 hover:text-white duration-500 flex items-center space-x-1'>
                            <AiFillInstagram />
                            <p className=''>Instagram</p>
                        </Link>
                        <Link className='font-semibold text-gray-300 hover:text-white duration-500 flex items-center space-x-1'>
                            <AiFillTwitterCircle />
                            <p className=''>Twitter</p>
                        </Link>
                        <Link className='font-semibold text-gray-300 hover:text-white duration-500 flex items-center space-x-1'>
                            <AiFillYoutube />
                            <p className=''>Youtube</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="border my-6 border-gray-500"></div> 
            <div className='lg:flex text-center justify-center items-center space-y-5 lg:space-y-0 lg:space-x-12 text-sm'>
                <p>© 2022 O Watch Check. All Rights Reserved</p>
                <p>Terms & conditions</p>
                <p>Sitemap</p>
                <p>Demo design system</p>
            </div>
        </div>
    );
};

export default MainFooter;