import { createSelector } from 'reselect';
import _ from 'lodash';

export const sortedListSelector = createSelector(
    state => state.list.data,
    state => state.list.sortDirection,
    state => state.list.sortField,
    (data, sortDirection, sortField) => {
        if (sortField && sortDirection) {
            return _.orderBy(data, [sortField], [sortDirection]);        
        } else {
            return data;
        }
    },
);
