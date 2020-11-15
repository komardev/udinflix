const MovieState = {
    ready: true,
    list: [],
    error: ''
}

const MovieReducer = (state = MovieState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIE_REQUEST': {
            return {
                ...state,
                ready: false,
            };
        }
        case 'FETCH_MOVIE_SUCCESS': {
            return {
                ready: true,
                list: action.payload,
                error: ''
            };
        }
        case 'FETCH_MOVIE_FAILURE': {
            return {
                ready: true,
                list: [],
                error: action.payload
            };
        }
        default:
            return state;
    }
};

export default MovieReducer;