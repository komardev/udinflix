const DetailState = {
    ready: true,
    detail: [],
    error: ''
}

const DetailReducer = (state = DetailState, action) => {
    switch (action.type) {
        case 'FETCH_DETAIL_REQUEST': {
            return {
                ready: false,
                detail: [],
                error: ''
            };
        }
        case 'FETCH_DETAIL_SUCCESS': {
            return {
                ready: true,
                detail: action.payload,
                error: ''
            };
        }
        case 'FETCH_DETAIL_FAILURE': {
            return {
                ready: true,
                detail: [],
                error: action.payload
            };
        }
        default:
            return state;
    }
};

export default DetailReducer;