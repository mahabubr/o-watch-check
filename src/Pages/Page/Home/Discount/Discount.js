import React from 'react';
import Countdown from 'react-countdown';
import imgBanner from '../../../../Assets/discount/1.png'
import imgBanner1 from '../../../../Assets/discount/2.png'
import imgBanner2 from '../../../../Assets/discount/3.png'
import imgBanner3 from '../../../../Assets/discount/4.png'
import imgBanner4 from '../../../../Assets/discount/5.png'

const Discount = () => {

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>Finished</span>
        } else {
            // Render a countdown
            return <div className='flex justify-evenly items-center gap-4 text-center mt-6'>
                <div className='bg-pink-200 p-2 rounded-md font-bold w-20'>
                    <h2 className='text-2xl text-gray-800'>{hours}</h2>
                    <p className='text-gray-600'>Hours</p>
                </div>
                <div className='bg-pink-200 p-2 rounded-md font-bold w-20'>
                    <h2 className='text-2xl text-gray-800'>{minutes}</h2>
                    <p className='text-gray-600'>Minutes</p>
                </div>
                <div className='bg-pink-200 p-2 rounded-md font-bold w-20'>
                    <h2 className='text-2xl text-gray-800'>{seconds}</h2>
                    <p className='text-gray-600'>Seconds</p>
                </div>
            </div>
        }
    };

    const renderer2 = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>Finished</span>
        } else {
            // Render a countdown
            return <div className='flex justify-evenly items-center gap-2 text-center mt-2'>
                <div className=''>
                    <h2 className='text-2xl text-gray-800'>{hours}</h2>
                    <p className='text-gray-600'>Hours</p>
                </div>
                <div className=''>
                    <h2 className='text-2xl text-gray-800'>{minutes}</h2>
                    <p className='text-gray-600'>Minutes</p>
                </div>
                <div className=''>
                    <h2 className='text-2xl text-gray-800'>{seconds}</h2>
                    <p className='text-gray-600'>Seconds</p>
                </div>
            </div>
        }
    };


    return (
        <div className='my-20 w-10/12 mx-auto'>
            <div>
                <h1 className='text-4xl font-bold text-center drop-shadow-md'>Deal of The Day</h1>
                <p className='text-center my-4 mb-8'>Don't miss this opportunity at a special discount just for this week.</p>
            </div>

            <div data-aos="flip-down" className='lg:flex border gap-8 items-center'>
                <div className='lg:flex gap-6 p-6 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-700 border-dashed justify-center items-center lg:w-9/12'>
                    <div className='lg:w-6/12'>
                        <img className='lg:w-full' src={imgBanner} alt="" />
                    </div>
                    <div className='lg:w-6/12 mt-4 lg:mt-0'>
                        <h3 className='text-4xl font-bold'>Super Gift Voucher</h3>
                        <h2 className='text-3xl font-bold text-red-500'>20% <span className='text-gray-600 text-base font-normal'>OFF</span></h2>
                        <Countdown
                            autoStart={true}
                            date={Date.now() + 5000000000000000 * 10}
                            renderer={renderer}
                        />
                    </div>
                </div>
                <div className='lg:w-3/12 p-6 text-center'>
                    <div className='flex items-center justify-center gap-2'>
                        <h4>Coupon <span className='text-xl text-green-600 font-bold'>Active</span></h4>
                        <div className="tooltip" data-tip="*This coupon code will apply on Grocery type products and when you shopping more than $500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <button className='bg-teal-200 py-4 px-8 mt-4 border-4 border-teal-500 border-dashed font-bold'>SUPER11</button>
                    </div>
                </div>
            </div>

            <div className='mt-8 grid md:grid-cols-2 gap-4'>
                <div data-aos="zoom-in-right" className='lg:flex border  gap-2 items-center'>
                    <div className='lg:flex gap-6 p-2 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-700 border-dashed justify-center items-center lg:w-9/12'>
                        <div className='lg:w-6/12'>
                            <img className='lg:w-full' src={imgBanner1} alt="" />
                        </div>
                        <div className='lg:w-6/12 mt-4 lg:mt-0'>
                            <h3 className='text-xl font-bold'>24 Gift Voucher</h3>
                            <h2 className='text-xl font-bold text-red-500'>10% <span className='text-gray-600 text-base font-normal'>OFF</span></h2>
                            <Countdown
                                autoStart={true}
                                date={Date.now() + 500000000 * 10}
                                renderer={renderer2}
                            />
                        </div>
                    </div>
                    <div className='lg:w-3/12 text-center p-2'>
                        <div className='flex items-center justify-center gap-1'>
                            <h4>Coupon <span className='text-lg text-green-600 font-bold'>Active</span></h4>
                            <div className="tooltip" data-tip="*This coupon code will apply on Grocery type products and when you shopping more than $500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <button className='bg-teal-200 py-2 px-4 mt-2 border-4 border-teal-500 border-dashed font-bold'>24GIFT</button>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-left" className='lg:flex border  gap-2 items-center'>
                    <div className='lg:flex gap-6 p-2 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-700 border-dashed justify-center items-center lg:w-9/12'>
                        <div className='lg:w-6/12'>
                            <img className='lg:w-full' src={imgBanner2} alt="" />
                        </div>
                        <div className='lg:w-6/12 mt-4 lg:mt-0'>
                            <h3 className='text-xl font-bold'>Buy Voucher</h3>
                            <h2 className='text-xl font-bold text-red-500'>80% <span className='text-gray-600 text-base font-normal'>OFF</span></h2>
                            <Countdown
                                autoStart={true}
                                date={Date.now() + 500000 * 10}
                                renderer={renderer2}
                            />
                        </div>
                    </div>
                    <div className='lg:w-3/12 text-center p-2'>
                        <div className='flex items-center justify-center gap-1'>
                            <h4>Coupon <span className='text-lg text-orange-600 font-bold'>InActive</span></h4>
                            <div className="tooltip" data-tip="*This coupon code will apply on Grocery type products and when you shopping more than $500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <button className='bg-teal-200 py-2 px-4 mt-2 border-4 border-teal-500 border-dashed font-bold'>BUY5854</button>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className='lg:flex border  gap-2 items-center'>
                    <div className='lg:flex gap-6 p-2 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-700 border-dashed justify-center items-center lg:w-9/12'>
                        <div className='lg:w-6/12'>
                            <img className='lg:w-full' src={imgBanner3} alt="" />
                        </div>
                        <div className='lg:w-6/12 mt-4 lg:mt-0'>
                            <h3 className='text-xl font-bold'>Return Money</h3>
                            <h2 className='text-xl font-bold text-red-500'>50% <span className='text-gray-600 text-base font-normal'>OFF</span></h2>
                            <Countdown
                                autoStart={true}
                                date={Date.now() + 50000 * 10}
                                renderer={renderer2}
                            />
                        </div>
                    </div>
                    <div className='lg:w-3/12 text-center p-2'>
                        <div className='flex items-center justify-center gap-1'>
                            <h4>Coupon <span className='text-lg text-green-600 font-bold'>Active</span></h4>
                            <div className="tooltip" data-tip="*This coupon code will apply on Grocery type products and when you shopping more than $500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <button className='bg-teal-200 py-2 px-4 mt-2 border-4 border-teal-500 border-dashed font-bold'>R-MOY582</button>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-left" className='lg:flex border  gap-2 items-center'>
                    <div className='lg:flex gap-6 p-2 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-700 border-dashed justify-center items-center lg:w-9/12'>
                        <div className='lg:w-6/12'>
                            <img className='lg:w-full' src={imgBanner4} alt="" />
                        </div>
                        <div className='lg:w-6/12 mt-4 lg:mt-0'>
                            <h3 className='text-xl font-bold'>Daily Voucher</h3>
                            <h2 className='text-xl font-bold text-red-500'>20% <span className='text-gray-600 text-base font-normal'>OFF</span></h2>
                            <Countdown
                                autoStart={true}
                                date={Date.now() + 5000000 * 10}
                                renderer={renderer2}
                            />
                        </div>
                    </div>
                    <div className='lg:w-3/12 text-center p-2'>
                        <div className='flex items-center justify-center gap-1'>
                            <h4>Coupon <span className='text-lg text-green-600 font-bold'>Active</span></h4>
                            <div className="tooltip" data-tip="*This coupon code will apply on Grocery type products and when you shopping more than $500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <button className='bg-teal-200 py-2 px-4 mt-2 border-4 border-teal-500 border-dashed font-bold'>DAILY14</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Discount;