import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, dispatch }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (<div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div onClick={() => dispatch(removeItem(cartItem))}className='more-or-less'>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div onClick={() => dispatch(addItem(cartItem))} className='more-or-less'>&#10095;</div>
        </span>
        <span className='price'>${price}</span>
        <div onClick={() => dispatch(clearItem(cartItem))} className='remove-button'>&#10005;</div>
    </div>)
}


export default connect()(CheckoutItem);