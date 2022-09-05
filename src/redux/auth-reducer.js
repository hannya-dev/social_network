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

export default authReducer;