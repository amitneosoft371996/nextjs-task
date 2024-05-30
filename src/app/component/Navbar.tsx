import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='container'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='navlink'><Link href="/">Home</Link></li>
                        <li className='navlink'>
                        <Link  href="/about">About</Link>
                        </li>
                        <li className='navlink'><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <Link href='' className=" "><Image src='/images/logo.png' width={100} height={80} alt=''></Image></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='navlink'><Link href="/">Home</Link></li>
                        <li className='navlink'>
                        <Link href="/about">About</Link>
                        </li>
                        <li className='navlink'><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar