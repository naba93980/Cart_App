const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }
    if (action.type === 'REMOVE') {
        const newCart = state.cart.filter(ele => ele.id !== action.payload)
        return { ...state, cart: newCart }
    }
    return state;
}

export default reducer;