import React from 'react';
const ProductCategories = () => {
    return (
        <div className='w-10/12 mx-auto my-20'>
            <h1 className='text-3xl font-bold text-center border-dashed drop-shadow-md shadow-indigo-300 shadow-md text-indigo-600 border-b-2 border-indigo-500'>Watch Catagories</h1>

            <div className='my-10'>
                <div class="flex justify-center">
                    <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                        <div class="py-3 px-6 border-b border-gray-300">
                            Featured
                        </div>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">Special title treatment</h5>
                            <p class="text-gray-700 text-base mb-4">
                                With supporting text below as a natural lead-in to additional content.
                            </p>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                        <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                            2 days ago
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductCategories;