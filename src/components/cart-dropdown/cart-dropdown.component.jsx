
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './cart-dropdown.style.scss';
// SHORTCUT for "props.cartItems" to ({ cartItems })
const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">

        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />)
                )
            }
        </div>

        <CustomButton>CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);