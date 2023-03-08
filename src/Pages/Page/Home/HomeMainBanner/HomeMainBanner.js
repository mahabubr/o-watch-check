import React from 'react';
import HomeMainFirstBanner from './HomeMainFirstBanner/HomeMainFirstBanner';
import HomeSecondBanner from './HomeSecondBanner/HomeSecondBanner';
// import HomeTextSlider from './HomeTextSlider/HomeTextSlider';
import HomeThirdBanner from './HomeThirdBanner/HomeThirdBanner';

const HomeMainBanner = () => {
    return (
        <div className='p-8 grid grid-cols-1 lg:grid-cols-3 lg:place-items-center'>
            <div className='lg:col-span-2' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <HomeMainFirstBanner></HomeMainFirstBanner>
            </div>
            <div className='lg:col-span-1 lg:ml-4 mt-4 lg:mt-0' data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <HomeSecondBanner></HomeSecondBanner>
                <HomeThirdBanner></HomeThirdBanner>
                {/* <HomeTextSlider></HomeTextSlider> */}
            </div>
        </div>
    );
};

export default HomeMainBanner;