import { call, put, takeEvery } from "@redux-saga/core/effects";
import {
  fetchPopularMovies,
  fetchMovie,
  fetchSearchMovies,
} from "../utils/fetchData";

const GET_MOVIES = "GET_MOVIES";
const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
const GET_MOVIES_ERROR = "GET_MOVIES_ERROR";

const GET_MOVIE = "GET_MOVIE";
const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
const GET_MOVIE_ERROR = "GET_MOVIE_ERROR";

const SEARCH_MOVIES = "SEARCH_MOVIE";
const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
const SEARCH_MOVIES_ERROR = "SEARCH_MOVIES_ERROR";

export const getMovies = () => ({ type: GET_MOVIES });
export const getMovie = (id) => ({ type: GET_MOVIE, id });
export const searchMovies = (value) => ({ type: SEARCH_MOVIES, value });

function* getMoviesSaga() {
  try {
    const movies = yield call(fetchPopularMovies);
    yield put({
      type: GET_MOVIES_SUCCESS,
      payload: movies,
    });
  } catch (e) {
    yield put({
      type: GET_MOVIES_ERROR,
      error: true,
      payload: e,
    });
  }
}

function* getMovieSaga(action) {
  const id = action.id;
  try {
    const movie = yield call(fetchMovie, id);
    yield put({
      type: GET_MOVIE_SUCCESS,
      payload: movie,
    });
  } catch (e) {
    yield put({
      type: GET_MOVIE_ERROR,
      error: true,
      payload: e,
    });
  }
}

function* searchMoviesSaga(action) {
  const value = action.value;
  try {
    const searchMovies = yield call(fetchSearchMovies, value);
    yield put({
      type: SEARCH_MOVIES_SUCCESS,
      payload: searchMovies,
    });
  } catch (e) {
    yield put({
      type: SEARCH_MOVIES_ERROR,
      error: true,
      payload: e,
    });
  }
}

export function* moviesSaga() {
  yield takeEvery(GET_MOVIES, getMoviesSaga);
  yield takeEvery(GET_MOVIE, getMovieSaga);
  yield takeEvery(SEARCH_MOVIES, searchMoviesSaga);
}

const initialState = {
  movies: {
    loading: false,
    data: null,
    error: null,
  },
  movie: {
    loading: false,
    data: null,
    error: null,
  },
  searchMovies: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case GET_MOVIES_ERROR:
      return {
        movies: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        movie: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case GET_MOVIE_ERROR:
      return {
        movie: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        searchMovies: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case SEARCH_MOVIES_ERROR:
      return {
        searchMovies: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}
