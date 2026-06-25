import React, { useEffect, useState } from 'react'
import { IoHeart } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { TbMenuDeep } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Navbar = () => {


    const [showMenu, SetShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    const toggleMenu = () => {

        SetShowMenu(!showMenu)
    }

    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll);
    })


    return (
        <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]' : ''}`}>
            <nav className='flex justify-between max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] items-center px-10'>
                <Link href="/" className='text-3xl font-bold' >Gr<span className='text-orange-500 uppercase'>o</span>cify</Link>

                {/* Desktop Menu */}

                <ul className='md:flex items-center gap-x-10 hidden'>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-orange-500 '>Home</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500 '>Abouts Us</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Process</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Contact Us</a>
                    </li>
                </ul>

                {/* Nav Action */}
                <div className='flex items-center gap-x-5'>
                    <div className='md:flex hidden  p-1 border-2 border-orange-500 rounded-full'>
                        <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 w-40 focus:outline-none items-center justify-center' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-600 text-white w-8 h-8 flex justify-center items-center rounded-full text-xl'>
                            <FaSearch />

                        </button>
                    </div>
                    <a href="" className='text-zinc-800 text-2xl hidden md:flex '>
                        <IoHeart />
                    </a>

                    <a href="" className='text-zinc-800 text-2xl hidden md:flex '>
                        <IoBagHandle />
                    </a>
                    {/* Hambargar Menu */}

                    <button className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
                        {showMenu ? <TbMenu3/> : <TbMenuDeep/>}
                    </button>
                </div>

                {/* Mobile Menu*/}

                <ul className={`flex items-center gap-x-10 md:hidden absolute flex-col gap-y-1.5 bg-orange-500/20 backdrop-blur-xl shadow-xl  rounded-2xl p-10 top-30 -left-full transform -translate-x-1/2 transition-all duration-500  ${showMenu ? 'left-1/2' : ""}`}>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-orange-500 '>Home</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500 '>Abouts Us</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Process</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Contact Us</a>
                    </li>

                    <li className='flex items-center gap-x-5 flex-col '>
                        <div className='flex md:hidden  p-1 border-2 border-orange-500 rounded-full'>
                            <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 md:w-10 w-40 focus:outline-none items-center justify-center' />
                            <button className='bg-gradient-to-b from-orange-400 to-orange-600 text-white w-8 h-8 flex justify-center items-center rounded-full text-xl'>
                                <FaSearch />

                            </button>
                        </div>
                        <div className='flex gap-x-10 pt-5'>
                            <a href="" className='text-orange-600 text-2xl md:hidden flex  '>
                                <IoHeart />
                            </a>

                            <a href="" className='text-orange-600 text-2xl md:hidden flex '>
                                <IoBagHandle />
                            </a>
                        </div>

                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Navbar
