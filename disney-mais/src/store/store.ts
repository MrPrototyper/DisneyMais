import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from '../features/user/userSlice';
import { movieReducer } from '../features/movie/movieSlice';
import { loginUser } from '../features/user/actions';

const rootReducer = combineReducers({
  currentUser: userReducer,
  loginInfo: userReducer,
  movies: movieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
