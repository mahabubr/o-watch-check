import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsGoogle, } from 'react-icons/bs';
import { FaFacebook, FaYahoo } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import Lottie from "lottie-react";
import lottieJson from '../../../Assets/animation/signup.json'

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

    const [handleRadio, setHandleRadio] = useState('buyer')

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


                            // GET JWT TOKEN

                            const currentUser = {
                                email: result.user.email
                            }

                            fetch('https://owatch-check-server.vercel.app/jwt', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(currentUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    localStorage.setItem('access-token', data.token);
                                });

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

                            // Sent User Into Mongodb

                            const userSignUpInfo = {
                                fullName,
                                email,
                                role: handleRadio,
                                isAdmin: false,
                                verify: false
                            }

                            fetch('https://owatch-check-server.vercel.app/user', {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(userSignUpInfo)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.acknowledged) {
                                        toast.success("User Info Successfully Save")
                                    }
                                })
                                .catch(e => {
                                    toast.error(e.message)
                                })



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
        setHandleRadio(value);
    }


    const handleSignUp = (event) => {
        event.preventDefault()

        const form = event.target

        const fullName = form.name.value
        const email = form.email.value
        const password = form.password.value
        const image = form.image.files[0]

        console.log(image);

        // Sent Image To Image BB
        const formData = new FormData()
        formData.append('image', image)
        sendImageBB(formData, email, password, fullName)


    }

    const singInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user

                // GET JWT TOKEN

                const currentUser = {
                    email: result.user.email
                }

                fetch('https://owatch-check-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('access-token', data.token);
                    });

                // Sent User Into Mongodb

                const userSignUpInfo = {
                    fullName: user.displayName,
                    email: user.email,
                    role: 'buyer',
                    isAdmin: false,
                    verify: false
                }

                fetch('https://owatch-check-server.vercel.app/user', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userSignUpInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success("User Info Successfully Save")
                        }
                    })
                    .catch(e => {
                        toast.error(e.message)
                    })

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

                // GET JWT TOKEN

                const currentUser = {
                    email: result.user.email
                }

                fetch('https://owatch-check-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('access-token', data.token);
                    });

                const user = result.user

                // Sent User Into Mongodb

                const userSignUpInfo = {
                    fullName: user.displayName,
                    email: user.email,
                    role: 'buyer',
                    isAdmin: false,
                    verify: false
                }

                fetch('https://owatch-check-server.vercel.app/user', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userSignUpInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success("User Info Successfully Save")
                        }
                    })
                    .catch(e => {
                        toast.error(e.message)
                    })

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

                // GET JWT TOKEN

                const currentUser = {
                    email: result.user.email
                }

                fetch('https://owatch-check-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('access-token', data.token);
                    });

                const user = result.user

                // Sent User Into Mongodb

                const userSignUpInfo = {
                    fullName: user.displayName,
                    email: user.email,
                    role: 'buyer',
                    isAdmin: false,
                    verify: false
                }

                fetch('https://owatch-check-server.vercel.app/user', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userSignUpInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success("User Info Successfully Save")
                        }
                    })
                    .catch(e => {
                        toast.error(e.message)
                    })

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
            <div className="p-4 rounded-md">
                <div className='block lg:flex justify-evenly items-center'>
                    <div className='lg:w-4/12 hidden lg:block h-screen bg-sky-800 rounded-lg shadow-lg'>
                        {/* <Lottie animationData={lottieJson} loop={true} /> */}
                        <img src="https://i.ibb.co/JKk5xhs/signupbg.png" className='h-screen object-cover' alt="" />
                    </div>
                    <div className='lg:flex items-center mt-8'>
                        <form onSubmit={handleSignUp} noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                            <h1 className='text-4xl font-bold text-center drop-shadow-md'>Please Register</h1>                            <div className="space-y-4">
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
                            <p className="text-lg text-center">already have have account?
                                <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline text-blue-600"> Log In Here</Link>
                            </p>
                        </form>
                        <div className="flex items-center my-4 lg:rotate-90">
                            <hr className="w-full text-gray-400" />
                            <p className="px-3 text-gray-400">OR</p>
                            <hr className="w-full text-gray-400" />
                        </div>
                        <div className="my-6 space-y-4">
                            <button onClick={singInWithGoogle} aria-label="Login with Google" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 text-white bg-violet-500 focus:ring-violet-500">
                                <BsGoogle />
                            </button>
                            <button onClick={handleYahooSignIn} aria-label="Login with GitHub" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 text-white bg-violet-500 focus:ring-violet-500">
                                <FaYahoo />
                            </button>
                            <button onClick={handleFacebookSignIn} aria-label="Login with Twitter" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 text-white bg-violet-500 focus:ring-violet-500">
                                <FaFacebook />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;