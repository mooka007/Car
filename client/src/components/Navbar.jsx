import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6"
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useAuthentication'
import prof from "../assets/prof.png"



const Navbar = () => {
    const {logout } = useLogout()
    const { user } = useAuthContext()
    const [ isOpen, setIsOpen ] = useState(false)
    const [ isSticky, setIsSticky ] = useState(false)
    const [ openProfile, setOpenProfile ] = useState(false)

    const handleClick = () => {
        logout()
        window.location.assign('/login');
    }

    // set toggle menu
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleScroll = ()  => {
            if(window.scrollY > -10){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll); 
        return ()=> {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    // nav items array
    const navItems = [
        {link: "Home", path: "/"},
        {link: "Service", path : "#"},
        {link: "Gallery", path : "/gallery"},
        // {link: "Contactus", path : "/contactus"},
        // {link: "About Us", path : "/aboutus"},       
    ];
    const navItemsNoUser = [
        {link: "Home", pathj: "/"},
        {link: "Service", pathj : "/"},
        {link: "About Us", pathj : "/aboutus"},
        // {link: "Contactus", path : "/contactus"},
        // {link: "About Us", path : "/aboutus"},       
    ];
    // console.log(user)
    return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
        <nav className={`py-4 lg:px-14 px-4  ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white " : "" } `}>
            <div className="flex items-center justify-between text-base gap-8">
                <a href="/" className="text-2xl font-semibold flex items-center space-x-3"> 
                    <img src={logo} alt="" className="w-30 inline-block items-center" />
                    <span className="text-[#263238]">RentX</span>
                </a>
                {/* nav items */}
                {
                    user ? (
                    <ul className="md:flex space-x-12 hidden">
                    {
                        navItems.map(({link, path}) => <Link to={path}  offset={-100} 
                        className="block text-base text-gray900 hover:text-brandPrimary first:font-medium" key={path} >{link}</Link> )
                    }
                    </ul>
                    ): (
                        <ul className="md:flex space-x-12 hidden">
                        {
                            navItemsNoUser.map(({link, pathj}) => <Link to={pathj}  offset={-100} 
                            className="block text-base text-gray900 hover:text-brandPrimary first:font-medium" key={pathj} >{link}</Link> )
                        }
                        </ul> 
                    )
                }
                {/* btn */}
                { 
                    user && (
                        <div className="space-x-12 hidden lg:flex items-center">
                            <span onClick={() => setOpenProfile((prev) => !prev)}>
                            <img src={prof} alt="" className="w-10 inline-block items-center" />

                            </span>
                        </div>
                        
                    )
                }
                { 
                    !user && (
                        <div className="space-x-12 hidden lg:flex items-center">
                            <a href="/login" className="hidden lg:flex items-center text-brandPrimary
                            hover:text-gray900">login</a>
                            <a href="/register" className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300
                            rounded hover:bg-neutralDGrey">Sign Up</a>
                        </div>
                    )
                }
                {/* menu btn */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="textneutralDgrey focus:outline-none focus:text-gray-500">
                        {
                            isOpen ?   (<FaXmark className="h-6 w-6" />) : (<FaBars className="h-6 w-6" />)
                        }
                    </button>
                </div>
            </div>
            {/*  mobile view */}
            <div className={`space-y-6 px-4 mt-24 py-10 bg-brandPrimary ${isOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({link, path}) => <Link to={path} spy="true" smooth="true"offset={-100} 
                        className="block text-base text-white hover:text-brandPrimary first:font-medium" key={path} >{link}</Link> )
                    }
            </div>
        </nav>
                    {
                        user &&(
                            openProfile && (
                                <div className="dropdownProfile flex flex-col">
                                    <ul className="flex flex-col gap-4">
                                        <li>{user.fullName}</li>
                                        <div className="flex justify-center items-center">
                                        {/* <span className="w-full border border-black"></span> */}
                                        {/* <span className="px-4">Or</span> */}
                                        <span className="w-full border border-black"></span>
                                    </div>
                                        <li><Link to='/booking'>Booking</Link></li>
                                        <li>Setting</li>
                                        <li onClick={handleClick}>Log Out</li>
                                    </ul>
                                </div>
                            )
                        ) 
                    }
    </header>
    )
}

export default Navbar;