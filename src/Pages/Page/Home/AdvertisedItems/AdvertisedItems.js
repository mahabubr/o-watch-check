import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../../Components/Loader/Loader';

const AdvertisedItems = () => {

    const { data: advertisedItem, isLoading } = useQuery({
        queryKey: ['advertised'],
        queryFn: () => fetch('https://owatch-check-server.vercel.app/advertised', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className='my-28'>
            {
                advertisedItem.length > 0 &&
                <>
                    <div>
                        <h1 className='text-4xl font-bold text-center drop-shadow-md'>Peoples's Choice</h1>
                        <p className='text-center my-4 mb-8'>There we show advertised watches that buyer paid us for boost his product</p>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        breakpoints={
                            {
                                640: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                            }
                        }
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"

                    >
                        {
                            advertisedItem.map(item =>
                                <SwiperSlide key={item._id}>
                                    <div className="card bg-base-100 shadow-xl image-full">
                                        <figure><img src={item.product_pic} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-white">{item.product_name}</h2>
                                            <p className='text-gray-200'>Category : {item.category_name}</p>
                                            <p className='text-orange-200 text-xl'>Price: $ {item.product_resale_price}</p>
                                            <p className='text-white'>Call To : + {item.seller_phone_number}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }

                    </Swiper>
                </>
            }
        </section>
    );
};

export default AdvertisedItems;