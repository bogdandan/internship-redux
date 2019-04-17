const redux = require('redux');
const rootReducer = require('./reducers');

const {createStore, applyMiddleware} = redux;

const prettyPrintState = state => JSON.stringify(state, null, 2)

const middleware = (store) => next => action => {
    console.log(' middleware ', action, prettyPrintState(store.getState()));
    next(action);
};

const store = createStore(rootReducer, applyMiddleware(middleware));

applyMiddleware();

const {getState, dispatch, subscribe} = store;

const unsubscribe = subscribe(() => console.log('subscribe state :', prettyPrintState(getState())));

console.log(unsubscribe);

dispatch({type: 'foo'});
dispatch({type: 'bar'});

unsubscribe();
