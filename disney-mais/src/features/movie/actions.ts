import { ThunkAction } from "redux-thunk";
import { GET_ALL_MOVIES_FAILURE, GET_ALL_MOVIES_REQUEST, GET_ALL_MOVIES_SUCCESS } from "./actionTypes";
import { Movie } from "./movie";
import { RootState } from "../../store/store";
import { getMovieData } from "./api";

interface GetAllMoviesRequestAction {
    type: typeof GET_ALL_MOVIES_REQUEST;
}
interface GetAllMoviesSuccessAction {
    type: typeof GET_ALL_MOVIES_SUCCESS;
    payload: {
        recommended: Movie[];
        newDisney: Movie[];
        originals: Movie[];
        trending: Movie[];
    };
}
interface GetAllMoviesFailureAction {
    type: typeof GET_ALL_MOVIES_FAILURE;
    payload: string;
}

export const getAllMoviesRequest = (): GetAllMoviesRequestAction => ({
    type: GET_ALL_MOVIES_REQUEST,
});

export const getAllMoviesSuccess = (movies: { recommended: Movie[], newDisney: Movie[], originals: Movie[], trending: Movie[] }): GetAllMoviesSuccessAction => ({
    type: GET_ALL_MOVIES_SUCCESS,
    payload: movies,
});

export const getAllMoviesFailure = (error: string): GetAllMoviesFailureAction => ({
    type: GET_ALL_MOVIES_FAILURE,
    payload: error,
});

export const getAllMovies = (): ThunkAction<void, RootState, unknown, MovieActionTypes> => async dispatch => {
    dispatch(getAllMoviesRequest());
    try {
        const data = await getMovieData();        
        dispatch(getAllMoviesSuccess(data));
    } catch (error: any) {
        dispatch(getAllMoviesFailure(error.message));
    }
};

export type MovieActionTypes = GetAllMoviesRequestAction |
    GetAllMoviesSuccessAction |
    GetAllMoviesFailureAction;
