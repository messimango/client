import { fetchCart, fetchUser } from "../utilities/fetchLocalStorageData"

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = { 
    user: userInfo,
    produceSelection: null,
    reservationList: null,     
    checkout: false,
    cart : cartInfo
};