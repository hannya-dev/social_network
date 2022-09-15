import {authApi} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";

let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case TOOGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
};

export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}});
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching})
export const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        authApi.authUser().then(data => {
            if (data.resultCode === 0) {
                dispatch(toogleIsFetching(false));
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        })
    }
}

export default authReducer;