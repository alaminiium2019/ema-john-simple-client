import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {

    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key == productKey);
    console.log(product);//

    return (
        <div>
            <p>Products details here...</p>
            <h1>{productKey}</h1>
            <Product product={product} showAddTocart={false}></Product>
        </div>
    );
};

export default ProductDetails;