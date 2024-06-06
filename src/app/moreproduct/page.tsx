"use client"
import Image from "next/image";
import {faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../page.css';
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { Product, fetchMoreProducts } from '../api/productApi';

const MoreProduct = () => {
    const [moreProduct, setMoreProduct]=useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

useEffect(()=>{
    const fetchProducts = async () => {
        try {
            const data:Product[] = await fetchMoreProducts();
            setMoreProduct(data);
        } catch (error) {
            setError('Failed to fetch product details');
        }
    };
  
    fetchProducts();
},[])
  return (
    <div className='container py-28 px-28'>
        <section className="moreproduct mt-12 mb-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4 featured-product ">
            {moreProduct.map((item: any, index: any)=>(
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
                         <li><Link href={{pathname:'/productsingle', query: {id:item?.id}}}><span className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></span></Link></li>
                         {/* <li className="tultip-op"><span className="tultip"><i className="fa fa-sort-desc"></i>ADD TO CART</span><a href="#"><span className="icon-icon-32846"><FontAwesomeIcon icon={faCartShopping} /></span></a>
 
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
  )
}

export default MoreProduct