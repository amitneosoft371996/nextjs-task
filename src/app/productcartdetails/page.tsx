'use client'
import React, { useState, useEffect } from 'react';
import { Cart, deleteCartItem, fetchCartItem } from '../api/productApi';
import '../productsingle/product.css';
import { faCircleCheck, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import ModalComponent from '../component/Modal';

const ProductCartDetail = () => {
  const [cartItem, setCartItem] = useState<Cart[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState<number | null>(null);

  const openModal = (id: number) => {
    setItemIdToDelete(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setItemIdToDelete(null);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data: Cart[] = await fetchCartItem();
        setCartItem(data);
      } catch (error) {
        alert('Failed to fetch product details');
      }
    };
    fetchAllData();
  }, []);

  const handleRemoveItem = async () => {
    if (itemIdToDelete !== null) {
      try {
        await deleteCartItem(itemIdToDelete);
        const updatedCart = cartItem.filter(item => Number(item.id) !== itemIdToDelete);
        setCartItem(updatedCart);
        closeModal();
      } catch (error) {
        console.error('Failed to remove item from cart', error);
      }
    }
  };

  return (
    <div className='container py-28'>
      <div className="grid grid-cols-1 gap-4 featured-product">
        <table className="table shop_cart_table">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>AVALABILITY</th>
              <th>PRICE</th>
              <th>TOTAL</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody className='box'>
            {cartItem.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className='itemnamebx'>
                    <figure className="image-box" style={{ marginRight: '20px' }}>
                      <Image src={item.image} width={60} height={50} alt='' />
                    </figure>
                    {item.description}
                  </div>
                </td>
                <td>
                  <input 
                    type="number" 
                    id="number-input" 
                    aria-describedby="helper-text-explanation" 
                    className="inputbx bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="90210" 
                    required 
                  />
                </td>
                <td>
                  <div className="iconholder">
                    <span className='checkarrow'>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span className="item">Item(s) <br />Available Now</span>
                  </div>
                </td>
                <td>{item.fixprice}</td>
                <td><span className='totalprice'>{item.fixprice}</span></td>
                <td>
                  <div className='removebt'>
                    <button className='deletecart' onClick={() => openModal(Number(item.id))}>
                      <FontAwesomeIcon icon={faDeleteLeft} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='checkout'>
          <button className='checkoutbtn'>Proceed To Checkout</button>
        </div>
      </div>
      <ModalComponent 
        isOpen={isOpen} 
        closeModal={closeModal} 
        onConfirm={handleRemoveItem}
      />
    </div>
  );
};

export default ProductCartDetail;
