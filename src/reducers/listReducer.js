import * as Actions from '../constants/actionTypes';

const initialState = {
    data: undefined,
    loading: false,
    error: undefined,
    sortField: undefined,
    sortDirection: undefined,
    darkTheme: false,
};

export default function ListReducer(state = initialState, action) {
    switch(action.type) {
        case Actions.LOAD_LIST:
            return {
                ...state,
                page: action.page,
                loading: true,
            };
        case Actions.LOAD_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case Actions.LOAD_LIST_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            };
        case Actions.UPDATE_SORT_FIELD:
            return {
                ...state,
                sortField: action.field,
                sortDirection: action.direction,
            };
        case Actions.UPDATE_THEME:
            return {
                ...state,
                darkTheme: action.darkTheme,
            };
        default:
            return state;
    }
}