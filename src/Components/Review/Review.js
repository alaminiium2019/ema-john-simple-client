import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Product from '../Product/Product';

const Review = () => {

    const [cart, setCart] = useState([]);


    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        }
        )
        setCart(cartProducts);

    },[])

    return (
        <div>
            <h1>This is review...</h1>
            <p>cart items: {cart.length}</p>
        </div>
    );
};

export default Review;