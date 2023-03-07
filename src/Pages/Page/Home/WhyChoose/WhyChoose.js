import React from 'react';
import { BsHandbag, BsCreditCard2Front } from 'react-icons/bs'
import { RiCustomerServiceLine } from 'react-icons/ri'
import { CgUserList } from 'react-icons/cg'
import { BiDollar } from 'react-icons/bi'
import { MdOutlineVerified } from 'react-icons/md'

const WhyChoose = () => {
    return (
        <div className='my-20 w-10/12 mx-auto'>
            <div>
                <h1 className='text-4xl font-bold text-center drop-shadow-md'>Why Choose Us</h1>
                <p className='text-center my-4 mb-8'>Modern approach & sustainable results</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center'>
                <div className='flex justify-center gap-4' data-aos="fade-right">
                    <div>
                        <BsHandbag className='text-teal-400' fontSize={40} />
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium'>Top industry specialists</h3>
                        <p className='text-base text-gray-600 mt-4'>We work together to deliver the results you seek to achieve.</p>
                        <button className="inline-block py-2 font-bold mt-3 px-6 bg-teal-400 text-black text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-400 hover:shadow-lg focus:bg-teal-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">Learn More...</button>
                    </div>
                </div>
                <div data-aos="flip-left" className='flex justify-center gap-4'>
                    <div>
                        <RiCustomerServiceLine className='text-teal-400' fontSize={40} />
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium'>24/7 Customer support</h3>
                        <p className='text-base text-gray-600 mt-4'>Contact us whenever you require support or expert advice – all at no extra cost.</p>
                        <button className="inline-block py-2 font-bold mt-3 px-6 bg-teal-400 text-black text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-400 hover:shadow-lg focus:bg-teal-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">Learn More...</button>
                    </div>
                </div>
                <div data-aos="fade-left" className='flex justify-center gap-4'>
                    <div>
                        <BsCreditCard2Front className='text-teal-400' fontSize={40} />
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium'>Fixed fees</h3>
                        <p className='text-base text-gray-600 mt-4'>Fixed fees No surprises or hidden costs. 100% safe online transactions.</p>
                        <button className="inline-block py-2 font-bold mt-3 px-6 bg-teal-400 text-black text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-400 hover:shadow-lg focus:bg-teal-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">Learn More...</button>
                    </div>
                </div>
                <div data-aos="fade-up-right" className='flex justify-center gap-4'>
                    <div>
                        <CgUserList className='text-teal-400' fontSize={40} />
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium'>Customer focus</h3>
                        <p className='text-base text-gray-600 mt-4'>We offer complete until he settled, our target was a fear.</p>
                        <button className="inline-block py-2 font-bold mt-3 px-6 bg-teal-400 text-black text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-400 hover:shadow-lg focus:bg-teal-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">Learn More...</button>
                    </div>
                </div>
                <div data-aos="flip-right" className='flex justify-center gap-4'>
                    <div>
                        <BiDollar className='text-teal-400' fontSize={40} />
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium'>Money back guarantee</h3>
                        <p className='text-base text-gray-600 mt-4'>We offer our complete, no-target creative projects value.</p>
                        <button className="inline-block py-2 font-bold mt-3 px-6 bg-teal-400 text-black text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-400 hover:shadow-lg focus:bg-teal-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">Learn More...</button>
                    </div>
                </div>
                <div data-aos="fade-up-left" className='flex justify-center gap-4'>
                    <div>
                        <MdOutlineVerified className='text-teal-400' fontSize={40} />
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium'>Tailored solutions</h3>
                        <p className='text-base text-gray-600 mt-4'>Unique solutions to your company's case, goals and budget.</p>
                        <button className="inline-block py-2 font-bold mt-3 px-6 bg-teal-400 text-black text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-400 hover:shadow-lg focus:bg-teal-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">Learn More...</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;