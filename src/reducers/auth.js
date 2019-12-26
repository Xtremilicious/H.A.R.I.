import {
    LOGIN,
    LOGOUT,
    LOADING_UI,
    UNLOADING_UI,
    SET_ERRORS,
    UNSET_ERRORS,
    TEST_STATE,
    SET_USER
} from '../actions/constants'

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: {},
    error: null,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
            };
        case LOGOUT:
            return {
                isAuthenticated: false
            };
        case LOADING_UI:
            return {
                ...state,
                loading: true,
            };
        case UNLOADING_UI:
            return {
                ...state,
                loading: null
            };

        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case UNSET_ERRORS:
            return {
                ...state,
                loading: false,
                error: null
            };
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case TEST_STATE:
            state.user.testStatus[action.assesmentType] = true;
            return state;
        default:
            return state;
    }
};