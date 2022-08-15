import React from 'react';
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    const cartIcon = <FontAwesomeIcon icon={faCartPlus}/>
/* 
    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);
 */
    let totalQuantity = 0;
    let itemTotal = 0;
    let shippingCharge = 0;
    let beforeTax = 0;
    let taxAmount = 0;
    let total = 0;

    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        totalQuantity = totalQuantity + product.quantity;
        itemTotal = parseFloat((itemTotal + product.price * product.quantity).toFixed(2));
        shippingCharge = parseFloat((product.shipping).toFixed(2));
        beforeTax = parseFloat((itemTotal + shippingCharge).toFixed(2));
        taxAmount = parseFloat((beforeTax * 0.1).toFixed(2));
        total = parseFloat((beforeTax + taxAmount).toFixed(2));
    }

    return (
        <div className='order-summary'>
            <h3>Order Summary {cartIcon}</h3>
            <hr /><br />
            <h5>Items Ordered: {totalQuantity}</h5>
            <p><small>Gross Price: ${itemTotal}</small></p>
            <p><small>Shipping: ${shippingCharge}</small></p>
            <p><small>Total before tax: ${beforeTax}</small></p>
            <p><small>10% Tax: ${taxAmount}</small></p>
            <hr />
            <h4>Total: ${total}</h4>
        </div>
    );
};

export default Cart;