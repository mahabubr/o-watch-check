import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleProducts from './SingleProducts';

const ProductCategories = () => {

    const [watchCategory, setWatchCategory] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://owatch-check-server.vercel.app/watch-category',
            responseType: 'json'
        })
            .then(function (response) {
                const data = response?.data
                setWatchCategory(data);
            });

    }, [])

    return (
        <div className='w-10/12 mx-auto my-20' data-aos="flip-down">
            <div>
                <h1 className='text-4xl font-bold text-center drop-shadow-md'>Watch Category</h1>
                <p className='text-center my-4 mb-8'>All the watch category on here. You can open any category that you like and buy you watch</p>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    watchCategory.map(watch => <SingleProducts key={watch._id} watch={watch} />)
                }
            </div>

        </div>
    );
};

export default ProductCategories;