import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const AddProducts = () => {

    const [currentTime, setCurrentTime] = useState(new Date().toDateString());

    const { user } = useContext(AuthContext)


    const handleAddProduct = (event) => {
        event.preventDefault()

        const form = event.target

        let category_id
        const category_name = form.productCategory.value
        const product_pic = form.productImage.value
        const product_name = form.productName.value
        const product_location = form.shopLocation.value
        const product_resale_price = form.productSellingPrice.value
        const product_original_price = form.productOriginalPrice.value
        const product_years_use = form.purchaseYear.value
        const product_post_time = currentTime
        const product_seller_name = user?.displayName
        const seller_verified = false
        const product_condition_type = form.productCondition.value
        const seller_phone_number = form.mobileNumber.value
        const product_description = form.productDescription.value
        const seller_email = user?.email

        if (category_name === "Analog Watch") {
            category_id = '637f6e38b2c7870c08c21400';
        }
        if (category_name === "Digital Watch") {
            category_id = '637f6e38b2c7870c08c21401';
        }
        if (category_name === "Smart Watch") {
            category_id = '637f6e38b2c7870c08c21402';
        }


        const addProductInfo = {
            category_id,
            category_name,
            product_pic,
            product_name,
            product_location,
            product_resale_price,
            product_original_price,
            product_years_use,
            product_post_time,
            product_seller_name,
            seller_verified,
            product_condition_type,
            seller_phone_number,
            product_description,
            seller_email
        }

        fetch('http://localhost:5000/watch', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addProductInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Congratulations',
                        'Your Product Successfully On Live',
                        'success'
                    )
                    form.reset()
                }
            })
            .catch(e => toast.error(e.method))


    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-pink-500 border-b-2 border-pink-500 p-2 cursor-pointer'>Add Your Products</h2>
            <div className='mt-10 w-11/12 mx-auto'>

                <form onSubmit={handleAddProduct}>

                    <input type="text" placeholder="Product Image URL" name='productImage' className="input mb-4 input-bordered input-secondary w-full" required />

                    <article className=' grid grid-cols-1 lg:grid-cols-2 gap-6'>

                        <input type="text" placeholder="Product Name" name='productName' className="input input-bordered input-secondary w-full" required />

                        <input type="number" placeholder="Product Original Price" name='productOriginalPrice' className="input input-bordered input-secondary w-full mt-0" required />

                        <select name='productCondition' className="select select-secondary w-full" required>
                            <option disabled selected>Your Product Condition Type</option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>

                        <input type="number" placeholder="Mobile Number" name='mobileNumber' className="input input-bordered input-secondary w-full" required />

                        <input type="text" placeholder="Product Location" name='shopLocation' className="input input-bordered input-secondary w-full" required />

                        <select name='productCategory' className="select select-secondary w-full" required>
                            <option disabled selected>Product Category</option>
                            <option>Analog Watch</option>
                            <option>Digital Watch</option>
                            <option>Smart Watch</option>
                        </select>


                        <input type="number" placeholder="Product Selling Price" name='productSellingPrice' className="input input-bordered input-secondary w-full" required />

                        <input type="text" placeholder="Year Of Purchase (please mention years or month)" name='purchaseYear' className="input input-bordered input-secondary w-full" required />

                    </article>

                    <textarea name='productDescription' className="textarea textarea-secondary w-full my-4" placeholder="Product Description...." required></textarea>

                    <input className="inline-block w-full py-4 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer" type="submit" value="Add Product" />

                </form>

            </div>
        </div>
    );
};

export default AddProducts;