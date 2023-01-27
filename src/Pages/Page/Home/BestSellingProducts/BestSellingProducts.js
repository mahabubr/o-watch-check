import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <div className='mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                {
                    arrivalProducts.map(product =>
                        <div key={product._id} className="shadow-lg drop-shadow-lg  rounded-sm hover:scale-110 duration-500">
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
                    )
                }
            </div>
        </div>
    );
};

export default BestSellingProducts;