import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    //console.log(props.product);
    const { img, name, seller, price, stock, key} = props.product;

    return (
        <div className="product d-flex" style={{ borderBottom: '1px solid lightgray', paddingBottom: '5px' }}>
            <div>
                <img src={img} />
            </div>
            <div className="p-3">
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br></br>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock- Order soon </small></p>
               
            {props.showAddToCart && 
                <button className="main-button" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to cart</button>}
            </div>
        </div>
    );
};

export default Product;