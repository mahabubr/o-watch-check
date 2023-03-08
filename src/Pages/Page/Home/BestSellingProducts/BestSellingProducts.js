import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const BestSellingProducts = () => {

    const [arrivalProducts, setArrivalProducts] = useState([])

    useEffect(() => {
        fetch('https://owatch-check-server.vercel.app/best-selling-products')
            .then(res => res.json())
            .then(data => setArrivalProducts(data))
    }, [])

    return (
        <div className='my-20 w-11/12 mx-auto'>
            <h1 className='text-4xl font-bold text-center drop-shadow-md'>Best Selling Product</h1>
            {/* <div className='mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
            </div> */}

            <Swiper
                className='mt-10'
                loop={true}
                autoplay={{ delay: 1000 }}
                speed={2000}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    450: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
                spaceBetween={30}
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
            >
                {
                    arrivalProducts.map(product =>
                        <SwiperSlide key={product._id}>
                            <div className="shadow-lg drop-shadow-lg  rounded-sm hover:scale-110 duration-500">
                                <Link to={`/watch-category/${product.category_id}`}>
                                    <p className="text-sm mb-4 font-bold text-green-600 text-center py-2">{product.category_name}</p>
                                </Link>
                                <img src={product.product_pic} className="w-full h-32 object-cover" alt="" />
                                <div className='p-2'>
                                    <h3 className='text-sm font-bold my-4 h-10'>{product.product_name.slice(0, 30)}</h3>
                                    <p className='text-violet-500 text-sm'>Price : ${product.product_resale_price}</p>
                                    <p className='text-sm text-blue-500'>Use Time : {product.product_years_use}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default BestSellingProducts;