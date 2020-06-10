import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppin-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHiddenProp, itemCountProp }) => (
    <div className='cart-icon' onClick={toggleCartHiddenProp}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCountProp}</span>
    </div>
)

const mapDispatcherToProps = dispatch => ({
    toggleCartHiddenProp: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    itemCountProp: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatcherToProps)(CartIcon);