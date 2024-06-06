'use client'
import React, { useState, useEffect } from 'react';
import { faCartShopping, faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './product.css';
import '@/app/page.css'
import Image from "next/image";
import { fetchAllProducts, fetchSingleProduct, Product, addItemToCart, fetchCartItem, Cart } from '../api/productApi';
import Link from 'next/link';
import { showToast } from '../component/Toast';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined },

}


const ProductDetail = ({ searchParams }: Props) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [allproduct, setAllProduct] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [cartItems, setCartItems] = useState<Cart[]>([]);
    console.log(searchParams)
    const productId = searchParams?.id;
    const id = Number(productId);
    useEffect(() => {
        if (id) {
            const fetchSingleData = async () => {
                try {
                    const data = await fetchSingleProduct(id);
                    setProduct(data);
                } catch (error) {
                    setError('Failed to fetch product details');
                }
            };
            fetchSingleData();
        }
    }, [id]);
    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const data: Product[] = await fetchAllProducts();
                setAllProduct(data);
            } catch (error) {
                setError('Failed to fetch product details');
            }
        };
        fetchAllData();
        const fetchCartData = async () => {
            try {
                const cartData: Cart[] = await fetchCartItem();
                setCartItems(cartData);
            } catch (error) {
                setError('Failed to fetch cart items');
            }
        };
        fetchCartData()
    }, [])
    if (!product) {
        return <div>No product found</div>;
    }

    const handleAddCartItem = async () => {
        if (!product) return;
        const cartData: Cart[] = await fetchCartItem();
        setCartItems(cartData);
        const isItemInCart = cartData.some(item => Number(item.id) === Number(product.id));
        if (isItemInCart) {
           showToast("warning",<p>Item allready in cart,Add quantity from cart</p>);
            return;
        }
        try {
            await addItemToCart(product);
            const updatedCartItems: Cart[] = await fetchCartItem();
            setCartItems(updatedCartItems);
            showToast("success",<p>item added in cart</p>);
        } catch (error) {
            setError('Failed to add item to cart');
        }
    };
   console.log(cartItems);
  

    return (
        <div>
            <section className='product-details'>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(/images/productdetailimg.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">SINGLE PRODUCT</h1>
                            <p className="mb-5">WELCOME TO CERTIFIED ONLINE ORGANIC PRODUCTS SUPPLIERS</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="grid grid-cols-1 gap-4 ">
                    <div className="product_top_section clear_fix1">
                        <div className="img_holder float_left">
                            <img src={product.image} alt={product.description} />
                        </div>
                        <div className="item_description float_left">
                            <h4>The Art Of The Start</h4>
                            <div className="ratingicon"><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span> (2 Customers Review)</div>
                            <span className="item_price">{product.offerprice}</span>
                            <p>There are many variations of passages,the majority suffered uts seds alterationin some of form uts, by injected humour random words which don't look evenslightly believable.</p>
                            <span className="check_location">Check Delivery Option at Your Location:</span>
                            <div className="clear_fix2">
                                <input type="text" className="float_left" placeholder="Pincode" />
                                <button className="float_left tran3s">Check</button>
                                <span className="float_left color1">*Expected Delivery in 4-10 Days</span>
                            </div>
                            <input type="number" id="number-input" aria-describedby="helper-text-explanation" className=" inputbx bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='1' />
                            <button onClick={handleAddCartItem} className="tran3s color1_bg addcart">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div className="related_product">
                        <div className="theme_title">
                            <h3>Related Products</h3>
                        </div>
                    </div>
                </div>
            </div>

            <section className="moreproduct mt-12 mb-12">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4 featured-product ">
                        {allproduct.map((item: any, index: any) => (
                            <div className="inner-box " key={index}>
                                <div className="single-item center">
                                    <figure className="image-box"><Image src={item.image} width={100} height={80} alt=''></Image><div className="product-model new">New</div></figure>
                                    <div className="content">
                                        <h3><a href="shop-single.html">{item.description}</a></h3>
                                        <div className="ratingicon"><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span></div>
                                        <div className="price">{item.offerprice} <span className="prev-rate">{item.fixprice}</span></div>
                                    </div>
                                    <div className="overlay-box">
                                        <div className="inner">
                                            <div className="top-content">
                                                <ul>
                                                    <li><Link href={{ pathname: '/productsingle', query: { id: item?.id } }}><span className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></span></Link></li>
                                                    {/* <li className="tultip-op"><span className="tultip"><i className="fa fa-sort-desc"></i>ADD TO CART</span><button onClick={handleAddCartItem}><span className="icon-icon-32846"><FontAwesomeIcon icon={faCartShopping} /></span></button>

                                                    </li> */}
                                                    <li><a href="#"><span className="fa fa-heart-o"><FontAwesomeIcon icon={faHeart} /></span></a></li>
                                                </ul>
                                            </div>
                                            <div className="bottom-content">
                                                <h4><a href="#">It Contains:</a></h4>
                                                <p>{item.itemcontains} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetail;
