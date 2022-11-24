import React from 'react';
import { Link } from 'react-router-dom';
import watchBannerPic from '../../../../Assets/watchBanner.png'

const HomeBanner = () => {
    return (
        <section>
            <div className="bg-pink-400">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className=" font-bold leading-none sm:text-4xl xl:max-w-3xl text-gray-900">Find Your Second Hand Watch</h1>
                    <div className="flex flex-wrap justify-center z-10">
                        <Link to='/login'>
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Login</button>
                        </Link>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-white-900">Learn more</button>
                    </div>
                </div>
            </div>
            <img src={watchBannerPic} alt="" className="w-3/6 mx-auto mb-12 -mt-20 rounded-lg  lg:-mt-60" />
        </section>
    );
};

export default HomeBanner;