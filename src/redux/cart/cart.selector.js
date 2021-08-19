import { createSelector } from "reselect";

/**
 * TWO TYPES OF SELECTORS
 * 
 * INPUT SELECTOR
 *  input selectors are used to get the state only. They do not create Selectors
 * 
 * OUTPUT SELECTOR
 *  output selectors are used to create selectors and return the compiled output
 * 
 */


// input selector
const selectCart = state => state.cart;

// output selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

/* 
    *  reduce() function is javascript's function used for combining multiple quantity numbers into  
    *  single output value. 
    *  
    * reduce(total number of items, current item, current index, source array)
    * 
*/

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cartItem => cartItem.reduce(
        (accumulatorQuantity, cartItem) => accumulatorQuantity + cartItem.quantity, 0)
);


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce(
        (accumulatorQuantity, cartItem) => accumulatorQuantity + cartItem.quantity * cartItem.price, 0)
)



// for hidden dropdown 
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)