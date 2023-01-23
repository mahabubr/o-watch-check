import React from 'react';
import HomeMainFirstBanner from './HomeMainFirstBanner/HomeMainFirstBanner';
import HomeSecondBanner from './HomeSecondBanner/HomeSecondBanner';
import HomeThirdBanner from './HomeThirdBanner/HomeThirdBanner';

const HomeMainBanner = () => {
    return (
        <div className='p-8 grid grid-cols-1 lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <HomeMainFirstBanner></HomeMainFirstBanner>
            </div>
            <div className='lg:col-span-1 lg:ml-4 mt-4 lg:mt-0'>
                <HomeSecondBanner></HomeSecondBanner>
                <HomeThirdBanner></HomeThirdBanner>
            </div>
        </div>
    );
};

export default HomeMainBanner;