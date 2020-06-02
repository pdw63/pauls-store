import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppin-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHiddenProp}) => (
    <div className='cart-icon' onClick={toggleCartHiddenProp}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatcherToProps = dispatch => ({
    toggleCartHiddenProp: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatcherToProps) (CartIcon);