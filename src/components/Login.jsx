import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40  lg:max-w-xl">
         <div className='flex justify-center items-center '>
           <img src='/assets/img/logo.png' alt='/' className='items-center'/>
         </div>
        
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
           Bitnine
        </h1>
        <form className="mt-6">
            <div className="mb-2">
                <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <Link
                to="/login"
                className="text-xs text-blue-600 hover:underline"
            >
                Forget Password?
            </Link>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-purple-600">
                    Login
                </button>
            </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <Link
                to="/signup"
                className="font-medium text-blue-600 hover:underline"
            >
                Sign up
            </Link>
        </p>
    </div>
</div>
  )
}

export default Login