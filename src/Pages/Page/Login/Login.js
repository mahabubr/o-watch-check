import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebook, FaYahoo } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Login = () => {

    const {
        googleSignIn,
        yahooSignIn,
        facebookSignIn,
        loginUser,
    }
        = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
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

                navigate(from, { replace: true })
                Swal.fire(
                    'Sign In',
                    'Account Login Successfully',
                    'success'
                )
            })
            .catch(e => {
                toast.error(e.message.slice(16, -1))
            })

    }


    const singInWithGoogle = () => {
        googleSignIn()
            .then(result => {

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

                navigate(from, { replace: true })
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

                navigate(from, { replace: true })
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

                navigate(from, { replace: true })
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
                <title>O-Watch Check - Login</title>
            </Helmet>
            <div className="w-9/12 my-20 mx-auto p-4 rounded-md sm:p-8 ">
                <h2 className="mb-3 text-5xl font-semibold text-center">Login To Enter</h2>
                <p className="text-lg text-center">New In The Website?
                    <Link to='/signup' rel="noopener noreferrer" className="focus:underline hover:underline text-blue-600"> Sign Up Here</Link>
                </p>
                <div className='block lg:flex justify-between items-center mt-8'>
                    <form onSubmit={handleLogin} noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid lg:w-6/12">
                        <div className="space-y-4">
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
                        <input className="inline-block w-full py-4 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer" type="submit" value="Login" />
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

export default Login;