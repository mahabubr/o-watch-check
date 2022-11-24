import axios from 'axios';
import React, { useState } from 'react';
import SingleProducts from './SingleProducts';

const ProductCategories = () => {

    const [watchCategory, setWatchCategory] = useState([])

    axios({
        method: 'get',
        url: 'http://localhost:5000/watch-category',
        responseType: 'json'
    })
        .then(function (response) {
            const data = response.data
            setWatchCategory(data);
        });

    return (
        <div className='w-10/12 mx-auto my-20'>
            <h1 className='text-3xl font-bold text-center border-dashed drop-shadow-md shadow-indigo-300 shadow-md text-indigo-600 border-b-2 border-indigo-500'>Watch Catagories</h1>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    watchCategory.map(watch => <SingleProducts key={watch._id} watch={watch} />)
                }
            </div>

        </div>
    );
};

export default ProductCategories;