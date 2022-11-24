import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsGoogle, } from 'react-icons/bs';
import { FaFacebook, FaYahoo } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const SignUp = () => {

    const {
        googleSignIn,
        yahooSignIn,
        facebookSignIn,
        createUser,
        updateUserNameAndPhoto,
    }
        = useContext(AuthContext)


    const navigate = useNavigate()

    const sendImageBB = (imagedata, email, password, fullName) => {
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_BB_KEY}`, {
            method: "POST",
            body: imagedata
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {

                    // Create User With Firebase
                    createUser(email, password)
                        .then(result => {
                            // Update User Name And Photo
                            updateUserNameAndPhoto(fullName, imageData.data.url)
                                .then(() => {
                                    toast.success('Your Name And Photo Update')
                                    navigate('/')
                                })
                                .catch(e => {
                                    toast.error(e.message.slice(16, -1))
                                })

                            Swal.fire(
                                'Sign Up',
                                'Account Created Successfully',
                                'success'
                            )
                        })
                        .catch(e => {
                            toast.error(e.message.slice(16, -1))
                        })
                    // Create User With Firebase --end

                }
            })
            .catch(e => {
                toast.error(e.message)
            })
    }

    const handleRadioChange = (event) => {
        const value = event.target.value
        console.log(value);
    }

    const handleSignUp = (event) => {
        event.preventDefault()

        const form = event.target

        const fullName = form.name.value
        const email = form.email.value
        const password = form.password.value
        const image = form.image.files[0]

        // Sent Image To Image BB
        const formData = new FormData()
        formData.append('image', image)
        sendImageBB(formData, email, password, fullName)


    }

    const singInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                navigate('/')
                Swal.fire(
                    'Sign Up',
                    'Account Created Successfully',
                    'success'
                )
            })
            .catch(e => {
                toast.error(e.message.slice(16, -1))
            })
    }

    const handleYahooSignIn = () => {
        yahooSignIn()
            .then(result => {
                navigate('/')
                Swal.fire(
                    'Sign Up',
                    'Account Created Successfully',
                    'success'
                )
            })
            .catch(e => {
                toast.error(e.message.slice(16, -1))
            })
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(result => {
                navigate('/')
                Swal.fire(
                    'Sign Up',
                    'Account Created Successfully',
                    'success'
                )
            })
            .catch(e => {
                toast.error(e.message.slice(16, -1))
            })
    }

    return (
        <div>
            <Helmet>
                <title>O-Watch Check - Sign Up</title>
            </Helmet>
            <div className="w-9/12 my-20 mx-auto p-4 rounded-md sm:p-8 ">
                <h2 className="mb-3 text-5xl font-semibold text-center">Sign Up To Enter</h2>
                <p className="text-lg text-center">already have have account?
                    <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline text-blue-600"> Log In Here</Link>
                </p>
                <div className='block lg:flex justify-between items-center mt-8'>
                    <form onSubmit={handleSignUp} noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid lg:w-6/12">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm">Full Name</label>
                                <input required type="text" name="name" id="name" placeholder="Full Name" className="w-full px-3 py-4 border rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="photo" className="block text-sm">Photo URL</label>
                                <input id='photo' name='image' type="file" className="file-input file-input-bordered file-input-success w-full " />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email Address</label>
                                <input required type="email" name="email" id="email" placeholder="Email Address" className="w-full px-3 py-4 border rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    <Link rel="noopener noreferrer" to='/forget' className="text-xs hover:underline text-gray-400">Forgot password?</Link>
                                </div>
                                <input required type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-4 border rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400" />
                            </div>
                            <div className="space-y-2 flex justify-evenly items-center">

                                <div className='flex justify-start items-center'>
                                    <input onClick={handleRadioChange} id='buyer' type="radio" value='buyer' name="radio" defaultChecked className="radio radio-accent mr-2" />
                                    <label htmlFor="buyer">buyer</label>
                                </div>

                                <div className='flex justify-start items-center'>
                                    <input onClick={handleRadioChange} id='seller' type="radio" value='seller' name="radio" className="radio radio-accent mr-2" />
                                    <label htmlFor="seller">Seller</label>
                                </div>

                            </div>
                        </div>
                        <input className="inline-block w-full py-4 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer" type="submit" value="Sign Up" />
                    </form>
                    <div className="flex items-center w-2/12 rotate-90 my-4">
                        <hr className="w-full text-gray-400" />
                        <p className="px-3 text-gray-400">OR</p>
                        <hr className="w-full text-gray-400" />
                    </div>
                    <div className="my-6 lg:w-4/12 space-y-4">
                        <button onClick={singInWithGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 text-white bg-violet-400 focus:ring-violet-400 transform skew-y-12">
                            <BsGoogle />
                            <p>Login with Google</p>
                        </button>
                        <button onClick={handleYahooSignIn} aria-label="Login with GitHub" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 text-white transform skew-y-12 bg-violet-400 focus:ring-violet-400">
                            <FaYahoo />
                            <p>Login with Yahoo</p>
                        </button>
                        <button onClick={handleFacebookSignIn} aria-label="Login with Twitter" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 text-white transform skew-y-12 bg-violet-400 focus:ring-violet-400">
                            <FaFacebook />
                            <p>Login with Facebook</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;