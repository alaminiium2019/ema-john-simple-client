import React from 'react';

const ReviewItem = (props) => {
    const { img, name, quantity, key, price } = props.product;

    const reviewStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div className="review-item" style={reviewStyle}>
            <img src={img}/>
            <h4 className="product-name">{name}</h4>
            <p>Quantity:{quantity}</p>
            <p>$ {price}</p>
            <br></br>
            <button className="main-button" onClick={() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;