import React from 'react';
import { Link } from 'react-router-dom';
import Shop from '../Shop/Shop';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    const totalPrice = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0)

    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    }
    else if (totalPrice > 15) {
        shipping = 4.99;
    }else if(totalPrice >0){
        shipping = 12.9;
    }

    const tax = Math.round(totalPrice / 10).toFixed(2);
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2)

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length} </p>
            <p>Product Price: {totalPrice.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax + VAT:{tax}</p>
            <p>Total Price: {grandTotal}</p>
            <br></br>
            {
                props.children
            }
        </div>
    );
};

export default Cart;