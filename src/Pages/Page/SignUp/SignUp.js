import React from 'react';
import { Link } from 'react-router-dom';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const SignUp = () => {
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
                    <form noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid lg:w-6/12">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm">Full Name</label>
                                <input required type="text" name="name" id="name" placeholder="Full Name" className="w-full px-3 py-4 border rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="photo" className="block text-sm">Photo URL</label>
                                <input id='photo' type="file" className="file-input file-input-bordered file-input-success w-full " />
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
                        </div>
                        <input className="w-full uppercase px-8 py-3 font-bold btn-primary  cursor-pointer" type="submit" value="Sign Up" />
                    </form>
                    <div className="flex items-center w-2/12 rotate-90 my-4">
                        <hr className="w-full text-gray-400" />
                        <p className="px-3 text-gray-400">OR</p>
                        <hr className="w-full text-gray-400" />
                    </div>
                    <div className="my-6 lg:w-4/12 space-y-4">
                        <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 text-white bg-violet-400 focus:ring-violet-400 transform skew-y-12">
                            <BsGoogle />
                            <p>Login with Google</p>
                        </button>
                        <button aria-label="Login with GitHub" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 text-white transform skew-y-12 bg-violet-400 focus:ring-violet-400">
                            <BsGithub />
                            <p>Login with GitHub</p>
                        </button>
                        <button aria-label="Login with Twitter" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 text-white transform skew-y-12 bg-violet-400 focus:ring-violet-400">
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