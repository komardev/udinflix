import API from '../../../api';

export const getSearch = (payload) => (dispatch) => {
    const data = {
        path: `&s=${payload}&plot=full`,
    };

    dispatch({
        type: 'FETCH_MOVIE_REQUEST'
    })
    API.Main(data).then((res) => {
        let value = res.data
        let newValue = []

        if (value.Response === 'True') {
            value.Search.forEach(val => (
                newValue.push({
                    Favourite: val.Favourite,
                    Poster: val.Poster,
                    Title: val.Title,
                    Type: val.Type,
                    Year: val.Year,
                    imdbID: val.imdbID
                })
            ))
        } else if (value.Response === 'False') {
            throw value
        }
        dispatch({
            type: 'FETCH_MOVIE_SUCCESS',
            payload: newValue
        });
    }).catch(error => {
        dispatch({
            type: 'FETCH_MOVIE_FAILURE',
            payload: error
        })
    })
};

export const getDetail = (payload) => (dispatch) => {
    const data = {
        path: `&t=${payload}&plot=full`,
    };

    dispatch({
        type: 'FETCH_DETAIL_REQUEST'
    })
    API.Main(data).then((res) => {
        let value = res.data
        if (value.Response === 'True') {
            dispatch({
                type: 'FETCH_DETAIL_SUCCESS',
                payload: res.data
            });
        } else if (value.Response === 'False') {
            throw value
        }
    }).catch(error => {
        dispatch({
            type: 'FETCH_DETAIL_FAILURE',
            payload: error
        });
    })
};