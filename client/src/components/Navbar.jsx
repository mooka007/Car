import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6"
import { useAuthContext } from '../hooks/useAuthContext'




const Navbar = () => {
    const { user } = useAuthContext()
    const [ isOpen, setIsOpen ] = useState(false)
    const [ isSticky, setIsSticky ] = useState(false)

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
    console.log(user)
    return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
        <nav className={`py-4 lg:px-14 px-4  ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white " : "" } `}>
            <div className="flex items-center justify-between text-base gap-8">
                <a href="/" className="text-2xl font-semibold flex items-center space-x-3"> 
                    <img src={logo} alt="" className="w-30 inline-block items-center" />
                    <span className="text-[#263238]">RentX</span>
                </a>
                {/* nav items */}
                <ul className="md:flex space-x-12 hidden">
                    {
                        navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} 
                        className="block text-base text-gray900 hover:text-brandPrimary first:font-medium" key={path} >{link}</Link> )
                    }
                </ul>
                {/* btn */}
                { 
                    user && (
                        <div className="space-x-12 hidden lg:flex items-center">
                            <a href="/login" className="hidden lg:flex items-center text-brandPrimary
                            hover:text-gray900">{user.fullName}</a>
                            <a href="/signup" className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300
                            rounded hover:bg-neutralDGrey">Log Out</a>
                        </div>
                    )
                }
                { 
                    !user && (
                        <div className="space-x-12 hidden lg:flex items-center">
                            <a href="/login" className="hidden lg:flex items-center text-brandPrimary
                            hover:text-gray900">login</a>
                            <a href="/signup" className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300
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
                        navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} 
                        className="block text-base text-white hover:text-brandPrimary first:font-medium" key={path} >{link}</Link> )
                    }
                    
            </div>
        </nav>

    </header>
    )
}

export default Navbar;