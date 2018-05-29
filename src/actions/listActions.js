import * as ActionTypes from '../constants/actionTypes';
import * as ListService from '../services/listService';

export function updateSortField(field) {
    return (dispatch, getState) => {
        const { sortDirection } = getState().list;
        dispatch({
            type: ActionTypes.UPDATE_SORT_FIELD,
            field,
            direction: sortDirection === 'desc' ? 'asc' : 'desc',
        });
    }
}

export function loadList() {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.LOAD_LIST });
        ListService.getData().then(data => {
            dispatch({ type: ActionTypes.LOAD_LIST_SUCCESS, data});
        }, error => {
            dispatch({ type: ActionTypes.LOAD_LIST_FAILURE });
        })
    }
}