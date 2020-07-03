import * as ACTION_TYPES from './ActionTypes'
import axios from 'axios'

const getMoviesStart = () => {

    return{
        type : ACTION_TYPES.GET_MOVIES_START,
        isLoading : true
    }
}

const getMovieSuccess = (movies) => {
    return {
        type : ACTION_TYPES.GET_MOVIES_SUCCESS,
        data : movies,
        isLoading : false
    }
}

const getMoviesFailed = (errorMessage) => {
    return {
        type : ACTION_TYPES.GET_MOVIES_FAILED,
        error : errorMessage,
        isLoading : false
    }
}

export const getMovies = () => {
    return (dispatch) => {

        dispatch(getMoviesStart());
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9428d1de175b89f3fba2af8d0b021de0')
        .then((response) => {
            dispatch(getMovieSuccess(response.data.results));
            console.log(resp.data.articles)
        })
        .catch((error) => {
            dispatch(getMoviesFailed(error))
        }) 
    }
}

