import React, { useState, useEffect } from 'react';

import {
  fetchAllOrders,
  fetchOrderProducts,
  deleteOrderAsync,
  deleteOrderProductAsync,
} from '../../features/singleProductSlice';

import { fetchAllProducts } from '../../features/allProductsSlice';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../singleProductSlice';

function Cart() {
  //Malcolm overnight cart edits//
  useEffect(() => {
    dispatch(fetchAllOrders());
    dispatch(fetchOrderProducts());
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // const cart = useSelector((state) => state.singleProduct.items);

  const orderproducts = useSelector(state => state.singleProduct.orderproducts);
  const orders = useSelector(state => state.singleProduct.orders);
  const products = useSelector(state => state.products);

  console.log('orders', orders);
  console.log('orderproducts', orderproducts);
  console.log('products', products);

  const dispatch = useDispatch();

  //end overnight edits

  // if (cart.length === 0) {
  //   return <p>Your cart is empty!</p>;
  // }{{

  const handleDelete = id => {
    dispatch(deleteOrderAsync(id));
    dispatch(deleteOrderAsync(id));
    dispatch(fetchAllOrders());
    dispatch(fetchOrderProducts());
    dispatch(fetchAllProducts());
  };

  const productinjector = tt => {
    console.log(tt); // console.log(products[tt-1].name)
    console.log(products[tt - 1]['name']);
    // console.log(value)
    return products[tt - 1]['name'];
    // return products[tt-1].id
  };

  const totalCart = () => {
    let total = 0;
    cart.forEach(product => {
      total += product.price * product.quantity;
    });
    return total;
  };

  return (
    <div>
      <h2 className='cart'>Your Cart</h2>

      {orderproducts.map(product => {
        // let tt = product.productId
        return (
          <div key={product.id} className='cart'>
            <h3>
              Order id:{product.productId}__productName__
              {productinjector(product.productId)}
            </h3>
            <button
              type='button'
              onClick={() => handleDelete(product.productId)}
            >
              X
            </button>
          </div>
        );
      })}
      {/* <p>Total: {totalCart()}</p> */}
    </div>
  );
}
export default Cart;
