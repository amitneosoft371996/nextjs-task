'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { faCartShopping, faUser, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Cart, fetchCartItem } from '../api/productApi';
import { addItemToCart } from '../api/productApi'

const Navbar = () => {
    const [cartItem, setCartItem] = useState<Cart[]>([])
    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const data: Cart[] = await fetchCartItem();
                setCartItem(data);
                setCartItem(prevState => [...prevState]);
            } catch (error) {
                alert('Failed to fetch product details');
            }
        };
        fetchAllData();

    }, [])

    return (
        <div className='container'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='navlink'><Link href="/">Home</Link></li>
                            <li className='navlink'>
                                <Link href="/about">About</Link>
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
                    <div className='cartbtnbx'>
                        <Link href="#" className='cartbtn'>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span>{cartItem.length}</span>
                        </Link>
                    </div>
                    <span style={{ width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', color: '#7fb401', height: '40px', borderRadius: '50px' }}><FontAwesomeIcon icon={faUser} /></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar