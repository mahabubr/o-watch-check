import React from 'react';
import watch from '../../../../Assets/watch-1.png'

const FlashSale = () => {
    return (
        <div className='my-20 w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='bg-gray-200 overflow-hidden' data-aos="flip-left">
                <img className='w-full transform scale-150 hover:scale-125 duration-500' src={watch} alt="" />
            </div>
            <div className='bg-[#EDF5E9] flex justify-center items-center flex-col p-8 text-center' data-aos="flip-right">
                <h2 className='text-5xl font-thin tracking-widest font-serif text-black'>FLASH SALE</h2>
                <h1 className='text-7xl font-bold my-6 text-black font-serif'>-70%</h1>
                <p className='font-serif text-2xl tracking-wider'>Great deals for black friday.</p>
                <p className='font-serif text-2xl tracking-wider'>Hurry up and get your hand products</p>
                <button className='mt-8 border-2 border-black p-4 hover:bg-black duration-300 hover:text-white text-black shadow-2xl'>SHOP COLLECTION</button>
            </div>
        </div>
    );
};

export default FlashSale;