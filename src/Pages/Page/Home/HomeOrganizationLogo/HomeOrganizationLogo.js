import React from 'react';
import { BsGoogle } from 'react-icons/bs'
import { TbBrandMeta } from 'react-icons/tb'
import { SiMicrosoftedge, SiYahoo } from 'react-icons/si'
import { RiNetflixFill } from 'react-icons/ri'
import { ImAirplane } from 'react-icons/im'
import { FaBusAlt } from 'react-icons/fa'

const HomeOrganizationLogo = () => {
    return (
        <div className='my-20 w-10/12 mx-auto'>
            <div>
                <h1 className='text-4xl font-bold text-center drop-shadow-md'>Support With Us</h1>
                <p className='text-center my-4 mb-8'>Company who support and we are work together.</p>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10'>
                <BsGoogle className='text-7xl text-gray-600 border-2 border-gray-600 hover:border-dashed duration-500 rounded-full p-2'/>
                <TbBrandMeta className='text-7xl text-gray-600 border-2 border-gray-600 hover:border-dashed duration-500 rounded-full p-2' />
                <SiMicrosoftedge className='text-7xl text-gray-600 border-2 border-gray-600 hover:border-dashed duration-500 rounded-full p-2' />
                <RiNetflixFill className='text-7xl text-gray-600 border-2 border-gray-600 hover:border-dashed duration-500 rounded-full p-2' />
                <SiYahoo className='text-7xl text-gray-600 border-2 border-gray-600 hover:border-dashed duration-500 rounded-full p-2' />
                <ImAirplane className='text-7xl text-gray-600 border-2 border-gray-600 hover:border-dashed duration-500 rounded-full p-2' />
                <FaBusAlt className='text-7xl text-gray-600 border-2 border-gray-600 hover:border-dashed duration-500 rounded-full p-2' />
            </div>
        </div>
    );
};

export default HomeOrganizationLogo;