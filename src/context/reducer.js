export const actionType = {
    SET_USER: "SET_USER",
    SET_PRODUCE_SELECTION : 'SET_PRODUCE_SELECTION',
    SET_RESERVATION_LIST : 'SET_RESERVATION_LIST',
    SET_CART : 'SET_CART',
    SET_CHECKOUT : "SET_CHECKOUT",
};


const reducer = (state, action) => {

    switch(action.type){
        case actionType.SET_USER:
            return {
                ...state,
                user : action.user,
        };

            
        case actionType.SET_RESERVATION_LIST:
            return {
                ...state,
                reservationList : action.reservationList,
        };

            
        case actionType.SET_PRODUCE_SELECTION:
            return {
                ...state,
                produceSelection : action.produceSelection,
        };
            

        case actionType.SET_CHECKOUT:
            return {
                ...state,
                checkout : action.checkout,
            };

        case actionType.SET_CART:
            return {
                ...state,
                cart : action.cart,
            };

    default:
        return state;
    }
};

export default reducer;