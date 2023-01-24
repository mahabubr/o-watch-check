import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../Components/Loader/Loader';

const AllProducts = () => {

    const [allWatches, setAllWatches] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://owatch-check-server.vercel.app/watch')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setAllWatches(data)
            })
    }, [])

    if(loading) {
        return <Loader/>
    }

    return (
        <div className='w-10/12 mx-auto my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    allWatches.map(watch =>
                        <div key={watch._id} className="shadow-lg drop-shadow-lg p-6 rounded-sm hover:scale-110 duration-500">
                            <Link to={`/watch-category/${watch.category_id}`}>
                                <p className="text-xl mb-4 font-bold text-green-600">{watch.category_name}</p>
                            </Link>
                            <img src={watch.product_pic} className="w-full h-40 object-cover" alt="" />
                            <h3 className='text-lg font-bold my-4 h-24'>{watch.product_name.slice(0, 60)}</h3>
                            <p className='text-violet-500 text-xl'>Price : ${watch.product_resale_price}</p>
                            <p>Use Time : {watch.product_years_use}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllProducts;