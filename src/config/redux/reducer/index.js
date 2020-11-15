import {
    combineReducers
} from 'redux';
import Movie from './Movie';
import Detail from './Detail';

const reducer = combineReducers({
    Movie,
    Detail
});

export default reducer;