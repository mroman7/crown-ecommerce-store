import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);


/**
 * 
 * NOTE:*******************************
 * 
 * Keep in Mind that:
 *      whenever an action happens or something happens in our application
 *      *******  Each Time Redux's "mapStateToProps" call *****************
 * 
 *      This causes the application performance issue, 
 * 
 *      This performance issue can be solved using package "RESELECT" which memorized our state and
 *      can only be call when a state change happen in certain state's property. 
 * 
 */

const mapStateToProps = state => ({

    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);