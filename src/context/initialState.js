import { fetchUser } from "../utilities/fetchLocalStorageData"

const userInfo = fetchUser()

export const initialState = { 
    user: userInfo,
}