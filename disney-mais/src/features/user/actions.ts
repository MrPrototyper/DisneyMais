import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store/store';
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER } from './actionTypes';
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
  payload: boolean;
}
interface LoginUserFailureAction {
  type: typeof LOGIN_USER_FAILURE;
  payload: string;
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

export const loginUserSuccess = (response: boolean): LoginUserSuccessAction => ({
  type: LOGIN_USER_SUCCESS,
  payload: response,
});

export const loginUserFailure = (error: string): LoginUserFailureAction => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const logoutUser = (): LogoutUserAction => ({
  type: LOGOUT_USER,  
});

export const loginUser = (loginInfo: {email: string, password: string}): ThunkAction<void, RootState, unknown, UserActionTypes> => async dispatch => {
  dispatch(loginUserRequest());
  try {
    const resp = await triggerLogin(loginInfo);
    dispatch(loginUserSuccess(resp));
    if (resp) {      
      dispatch(fetchUserSuccess({name: 'Tiago', email: 'tiago@disney.com', photo: 'https://via.placeholder.com/150'}));
    }
  } catch (error: any) {
    dispatch(loginUserFailure(error.message));
  }
};

export type UserActionTypes = FetchUserRequestAction |
  FetchUserSuccessAction |
  FetchUserFailureAction |
  LoginUserAction |
  LoginUserSuccessAction |
  LoginUserFailureAction;
