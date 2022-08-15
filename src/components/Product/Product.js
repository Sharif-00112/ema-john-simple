import React from 'react';
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const {name, category, seller, price, stock, star, img} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faCartPlus}/>
    return ( 
        <div className='product'>
            <div className="product-img">
                <img src={img} alt={category} />
            </div>
            <div className="product-details">
                <div className="">
                    <h4 className='product-name'>{name}</h4>
                </div>
                <div className="product-info">
                    <div className="">
                        <p><small>By: {seller}</small></p>
                        <p>$ {price}</p>
                        <p><small>Only {stock} left in stock! Order soon</small></p>
                        <button 
                            onClick={() => props.handleAddToCart(props.product)} 
                            className='add-cart-btn'>{cartIcon} Add to Cart</button>
                    </div>
                    <div className="">
                        <p className='rating'><small> <Rating 
                                initialRating={star}
                                // emptySymbol="fa-regular fa-star"
                                // fullSymbol="fa-solid fa-star"
                                readonly
                                ></Rating>
                            </small></p>
                        {/* <p><small>Total rates: {starCount}</small></p> */}
                        <p><small>Features: </small></p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Product;