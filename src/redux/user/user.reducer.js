import { userActionTypes } from './user.types';
const INITIAL_STATE = {
    currentUser: null
}

// defining reducer function which takes the "initial state / previous state" && an action
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:    
            return {
                ...state, 
                currentUser: action.payload
            }           
    
        default:
            return state
    }
}

export default userReducer;