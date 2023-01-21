import React from 'react';
// import { Link } from 'react-router-dom';
// import watchBannerPic from '../../../../Assets/watchBanner.png'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <section>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='h-96 bg-[url(https://images.unsplash.com/photo-1511370235399-1802cae1d32f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=855&q=80)] p-20 object-cover' >
                        <h1 className='text-5xl font-bold text-white'>Find Your Second Hand Product</h1>
                        <p className='text-xl hidden md:block font-semibold text-white'>A watch is a portable timepiece intended to be carried or worn by a person. It is designed <br /> to keep a consistent movement despite the motions caused by the person's activities.</p>
                        <Link to='/watch-category/637f6e38b2c7870c08c21400'>
                            <button className="inline-block px-10 mt-2 py-4 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">Analog Watch</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-96 bg-[url(https://images.unsplash.com/photo-1580287017488-706e4d7598a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)] p-20 object-cover' >
                        <h1 className='text-5xl font-bold text-white'>Find Your Second Hand Product</h1>
                        <p className='text-xl hidden md:block font-semibold text-white'>A watch is a portable timepiece intended to be carried or worn by a person. It is designed <br /> to keep a consistent movement despite the motions caused by the person's activities.</p>
                        <Link to='/watch-category/637f6e38b2c7870c08c21402'>
                            <button className="inline-block px-10 mt-2 py-4 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">Smart Watch</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-96 bg-[url(https://images.unsplash.com/photo-1600003014637-ff82a275e191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80)] p-20 object-fill' >
                        <h1 className='text-5xl font-bold text-white'>Find Your Second Hand Product</h1>
                        <p className='text-xl hidden md:block font-semibold text-white'>A watch is a portable timepiece intended to be carried or worn by a person. It is designed <br /> to keep a consistent movement despite the motions caused by the person's activities.</p>
                        <Link to='/watch-category/637f6e38b2c7870c08c21401'>
                            <button className="inline-block px-10 mt-2 py-4 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">Digital Watch</button>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HomeBanner;