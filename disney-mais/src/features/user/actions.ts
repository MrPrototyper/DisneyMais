import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store/store';
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER, SET_LOGIN_EMAIL } from './actionTypes';
import { fetchUserData, triggerLogin } from './api';
import { User } from './user';

interface FetchUserRequestAction {
  type: typeof FETCH_USER_REQUEST;
}
interface FetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: User | null;
}
interface FetchUserFailureAction {
  type: typeof FETCH_USER_FAILURE;
  payload: string;
}

interface LoginUserAction {
  type: typeof LOGIN_USER;
}
interface LoginUserSuccessAction {
  type: typeof LOGIN_USER_SUCCESS;
  payload: User;
}
interface LoginUserFailureAction {
  type: typeof LOGIN_USER_FAILURE;
  payload: string;
}

interface setLoginEmailAction {
  type: typeof SET_LOGIN_EMAIL;
  payload:  {email: string | null, password: string | null} | null;
}

interface LogoutUserAction {
  type: typeof LOGOUT_USER;  
}

export const fetchUserRequest = (): FetchUserRequestAction => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (user: User | null): FetchUserSuccessAction => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (error: string): FetchUserFailureAction => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const fetchUser = (): ThunkAction<void, RootState, unknown, UserActionTypes> => async dispatch => {
  dispatch(fetchUserRequest());
  try {
    const data = await fetchUserData();
    dispatch(fetchUserSuccess(data));
  } catch (error: any) {
    dispatch(fetchUserFailure(error.message));
  }
};

export const loginUserRequest = (): LoginUserAction => ({
  type: LOGIN_USER,
});

export const loginUserSuccess = (response: User): LoginUserSuccessAction => ({
  type: LOGIN_USER_SUCCESS,
  payload: response,
});

export const loginUserFailure = (error: string): LoginUserFailureAction => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const logoutUserRequest = (): LogoutUserAction => ({
  type: LOGOUT_USER,  
});

export const setUserEmail = (email: string): setLoginEmailAction => ({
  type: SET_LOGIN_EMAIL,
  payload: {email: email, password: null},  
});

export const loginUser = (loginInfo: {email: string, password: string}): ThunkAction<void, RootState, unknown, UserActionTypes> => async dispatch => {
  dispatch(loginUserRequest());
  try {
    const resp = await triggerLogin(loginInfo);
    if (resp) {
      saveToLocalStorage('currentUser', resp);
      dispatch(loginUserSuccess(resp));
    }
  } catch (error: any) {
    dispatch(loginUserFailure(error.message));
  }
};

export const logoutUser = (): ThunkAction<void, RootState, unknown, UserActionTypes> => async dispatch => {
  dispatch(logoutUserRequest());
  localStorage.removeItem('currentUser');  
};

const saveToLocalStorage = <T,>(key: string, value: T): void => {
  try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
  } catch (error) {
      console.error('Error saving to local storage', error);
  }
};

export type UserActionTypes = FetchUserRequestAction |
  FetchUserSuccessAction |
  FetchUserFailureAction |
  LoginUserAction |
  LoginUserSuccessAction |
  LogoutUserAction |
  LoginUserFailureAction;
