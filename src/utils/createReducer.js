/*
 * Inspired by http://redux.js.org/docs/recipes/ReducingBoilerplate.html#generating-reducers
 */
export default function createReducer(initialState, handlers = {}) {
    return (state = initialState, action) => {
        if (typeof handlers[action.type] === 'function') {
            const newState = handlers[action.type](state, action);
            if (!newState) return state;
            return {
                ...state,
                ...newState,
            };
        }
        return state;
    };
}
