const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }
    if (action.type === 'REMOVE') {
        const newCart = state.cart.filter(ele => ele.id !== action.payload)
        return { ...state, cart: newCart }
    }
    if (action.type === 'INCREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount : cartItem.amount + 1 };
            }
            return cartItem;
        })
        return { ...state, cart: tempCart };
    }
    if (action.type === 'DECREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                if (cartItem.amount===0) return cartItem
                return { ...cartItem, amount : cartItem.amount - 1 };
            }
            return cartItem;
        })
        return { ...state, cart: tempCart };
    }
    return state;
}

export default reducer;