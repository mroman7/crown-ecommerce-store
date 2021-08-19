
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-dropdown.style.scss';

/**
 * 
 * NOTE:
 * connect() function of redux always provide disptach function, whether we provide it or not:
 * 
 * we use this dispatch as a prop in a our below component and change the state value of toggleCartHidden 
 * inside button click function. 
 * 
 * KEEP IN MIND:
 * 
 * This is the short-hand property of DISPTACH() function 
 * 
 */

// SHORTCUT for "props.cartItems" to ({ cartItems })
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">

        <div className="cart-items">
            {
                cartItems.length ?
                    (cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />)
                    ))
                    :
                    (<span className="empty-message">Your Cart is Empty</span>)
            }
        </div>

        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }} >CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

/**
 * 
 * withRouter() is a Higher Order Component. Which Takes Component as argument and return component
 * 
 * Using "withRouter()" we can access all the "react-router-dom" properties 
 * like
 * history, parameters, etc
 * 
 */




export default withRouter(connect(mapStateToProps)(CartDropdown));