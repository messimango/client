export const actionType = {
    SET_USER: "SET_USER",
    SET_PRODUCE_SELECTION : 'SET_PRODUCE_SELECTION',
};


const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case actionType.SET_USER:
            return {
                ...state,
                user : action.user,
            };

            
            case actionType.SET_PRODUCE_SELECTION:
                return {
                    ...state,
                    produceSelection : action.produceSelection,
                };

            default:
                return state;
    }
};

export default reducer;