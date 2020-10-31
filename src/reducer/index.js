import {
    SET_IMAGES,
    SET_PAGE
} from '../actions/index';

const initialState = {
    images : [],
    page: 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            return {
                ...state,
                images: [action.payload],
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
