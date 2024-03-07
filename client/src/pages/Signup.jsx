import React, { useState } from "react"

import logo from "../assets/logo.png"
import { useRegister } from '../hooks/useAuthentication.js'

const Signup = () => {
    const { register, isLoading } = useRegister()
    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [checked, setChecked] = useState(false);
    const [ error, setError] = useState()

     // ============= Event Handler Start here =============
    const handleName = (e) => {
        setfullName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        
    };
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    
const handleSubmit = async (e) => {
    e.preventDefault();
        if (checked || !checked) { 
            if (!fullName  &&  !email   && !phone && !password  ) {
                setError('All fields are required')
            }
                
        }
        // ============== Getting the value ==============
        if ( fullName && email && phone && password &&  password.length >= 6 ) {
            await register(fullName, email, phone, password)
            }
    }
    return (
        <div className="bg-white">
            <div className="flex min-h-screen">
                <div className="flex flex-row w-full">
                    {/* left side */}
                    <div className='hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
                        {/* logo - left side */}
                        <div className="flex items-center justify-start space-x-3">
                            {/* <span className="bg-black rounded-full w-8 h-8"></span> */}
                            <a href="/" className="text-2xl font-semibold flex items-center space-x-3"> 
                                <img src={logo} alt="" className="w-30 inline-block items-center" />
                                <span className="text-[#263238]">RentX</span>
                            </a>
                        </div>
                        {/* text - left side */}
                        <div className='space-y-5'>
                            <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Enter your account and discover new
                            experiences</h1>
                            <p className="text-lg">already have an account</p>
                            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                                    {/* <a href="/login" classNameName="hover:text-gray900">Login </a> */}
                            </button>
                        </div>
                        <p className="font-medium">2024 © All rights reserved.  Made with ❤︎ </p>
                    </div>
                    
                    {/* form Side */}
                    <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                        {/* responsive  logo */}
                        <div className="flex lg:hidden justify-between items-center w-full py-4">
                            <div className="flex items-center justify-start space-x-3">
                                <a href="#" className="text-2xl font-semibold flex items-center space-x-3"> 
                                    <img src={logo} alt="" className="mx-6 w-30 inline-block items-center" />
                                    <span className="text-[#263238]">RentX</span>
                                </a>
                            </div>
                        </div>

                        {/*  Form */}
                        <div  className="lg:mt-20  flex flex-1 flex-col  justify-center space-y-5 lg:w-[640px]">
                            <div className="flex flex-col space-y-2 text-center">
                                <h2 className="text-3xl md:text-4xl font-bold">Sign Up</h2>
                                <p className="text-md md:text-xl">Join us and unlock exclusive benefits!</p>
                            </div>
                            {/* form */}
                            <form onSubmit={handleSubmit} className="flex flex-col justify-center lg:ml-24 max-w-md space-y-5">
                                <input onChange={handleName} value={fullName} type="text" placeholder="FullName"
                                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />

                                <input onChange={handleEmail} value={email} type="text" placeholder="Email"
                                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />

                                <input onChange={handlePhone}  value={phone} type="text" placeholder="phone Number"
                                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />

                                <input onChange={handlePassword} value={password} type="text" placeholder="Password"
                                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />

                                <input type="text" placeholder="Confirm Password"
                                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
                                {/* Checkbox */}
                                <div className="flex items-start mdl:items-center gap-2">
                                    <input
                                        onChange={() => setChecked(!checked)}
                                        className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                                        type="checkbox"
                                    />
                                    <p className="text-sm text-primeColor">
                                        I agree to the RentX{" "}
                                        <span className="text-blue-500">Terms of Service </span>and{" "}
                                        <span className="text-blue-500">Privacy Policy</span>.
                                    </p>
                                </div>
                                { error && <div className='error'>{error}</div>}

                                {/* ---------------------------------------------- */}
                                <div className="flex justify-center items-center">
                                    <span className="w-full border border-black"></span>
                                    <span className="px-4">Or</span>
                                    <span className="w-full border border-black"></span>
                                </div>
                                {/* ---------------------------------------------- */}

                                <button  className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                                    Confirm
                                </button>
                            </form >
                        </div>

                        {/* footer */}
                        <div className="flex justify-center flex-col m-auto mb-16 text-center text-lg dark:text-slate-200 ">
                            <p>Contact Us on the different platforms and social networks</p>
                            <div className="flex items-center justify-center space-x-2 mt-4 flex-wrap">
                                <a href="https://www.linkedin.com/"
                                    className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-700">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4.983" cy="5.009" r="2.188" fill="currentColor"></circle>
                                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                                        fill="currentColor"></path> </svg>
                                </a>
                                <a href="https://github.com/"
                                    className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-700"><svg
                                    width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                                        fill="currentColor"></path>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/"
                                    className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-700"><svg
                                    width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                                        fill="currentColor"></path>
                                    </svg>
                                </a>
                                <a href="https://twitter.com/"
                                    className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-700"><svg
                                    width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                                        fill="currentColor"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;