import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER } from "./actionTypes";
import { User } from './user';

interface UserState {
    loading: boolean;
    currentUser: User | null;
    error: string | null;
}

const initialState: UserState = {
    loading: false,
    currentUser: null,
    error: null,
};

export const userReducer = (state = initialState, action: any): UserState => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_USER_SUCCESS:
            return { ...state, loading: false, currentUser: action.payload };
        case FETCH_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: null };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false };
        case LOGIN_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case LOGOUT_USER:
            return { ...state, currentUser: null };
        default:
            return state;
    }
};
