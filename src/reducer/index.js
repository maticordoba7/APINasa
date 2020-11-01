import {
    SET_IMAGES,
    SET_PAGE,
    SET_ROVER,
    SET_CAMERA,
    SET_EARTH_DATE,
    SET_SOL_DATE
} from '../actions/index';

const initialState = {
    images : [],
    page: 1,
    rover: "Curiosity",
    camera: "FHAZ",
    earthDate: "",
    solDate: 1000
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
        case SET_ROVER:
            return {
                ...state,
                rover: action.payload,
                camera: initialState.camera,
                page: initialState.page
            }
        case SET_CAMERA:
            return {
                ...state,
                camera: action.payload,
                page: initialState.page
            }
        case SET_EARTH_DATE:
            return {
                ...state,
                earthDate: action.payload,
                solDate: initialState.solDate,
                page: initialState.page
            }
        case SET_SOL_DATE:
            return {
                ...state,
                solDate: action.payload,
                earthDate: initialState.earthDate,
                page: initialState.page
            }
        default:
            return state;
    }
}

export default reducer;
