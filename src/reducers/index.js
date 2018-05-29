import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import list from './listReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    list,
});

const store = createStore(
    reducer,
    {},
    compose(
        applyMiddleware(thunk), 
        (process.env.NODE_ENV === 'development' && window.devToolsExtension) ? window.devToolsExtension() : f => f
    ),
);

export default store;