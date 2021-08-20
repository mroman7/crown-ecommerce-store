import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';

import './checkout-item.style.scss';

// if we use cartItem: { name, imageUrl, quantity, price } This type of de-structuring we unable to access cartItem

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {

    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => addItem(cartItem)} >&#10095;</span>
            </span>
            <span className="price">${price}</span>
            <div className="remove-btn" onClick={() => clearItem(cartItem)} >&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);