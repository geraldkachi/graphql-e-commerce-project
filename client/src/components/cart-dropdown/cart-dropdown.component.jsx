import React from 'react';

// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectCartItems } from '../../redux/cart/cart.selectors';

import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
// import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.css';

// const CartDropdown = ({ cartItems, history, dispatch }) => (
const CartDropdown = ({ cartItems, history, toggleCartHidden}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleCartHidden()
        // dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

export default withRouter(CartDropdown)


// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// });

// export default withRouter(connect(mapStateToProps)(CartDropdown));
